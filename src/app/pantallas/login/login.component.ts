import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import { AppComponent } from 'src/app/app.component';
import { ApiService } from 'src/app/servicios/api/api.service';
import {ResponseI} from "../../modelos/response.interface";

import {Router} from "@angular/router";
import { loginI } from 'src/app/modelos/login.interface';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  

  loginForm = new FormGroup({
      usuario : new FormControl("",Validators.required),
      password : new FormControl("",Validators.required)
  })

  constructor(private fb:FormBuilder, private router:Router, private loginPri:ApiService, private visual:AppComponent, private dash:DashboardComponent, private http:HttpClient) { }
  
  errorsito:boolean = false;
  mensajerror:any = "";


  ngOnInit(): void {
    this.loginForm = this.createMyForm();
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      usuario :["",[Validators.required]],
      password : ["",Validators.required]
    });

  }
  public onLogin(form:any){

     this.dash.cargarData(form)
  
    if(this.loginForm.invalid){
        Object.values(this.loginForm.controls).forEach(control=>{
          control.markAllAsTouched();
          
        })
        return;
    }
    if(!this.loginPri.ingresarAplicativo(this.loginForm.value)){
        this.errorsito = true;
        this.mensajerror = "usuario o contraseña invalida";
        
    }

    if (this.loginPri.ingresarAplicativo(this.loginForm.value)){
      this.router.navigate(["dashboard"])
    }

  }

  
  public get f():any{
    return this.loginForm.controls;
  }
  
}
