import { Injectable } from '@angular/core';

import {loginI} from "../../modelos/login.interface";
import {ResponseI} from "../../modelos/response.interface";
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url : string = "https://auth.itso.ga/v1/auth/login/";
  private ingresar:boolean = false;

  constructor(private  http:HttpClient) { }


  // login
  public ingresarAplicativo(obj:any):boolean{
    this.ingresar = obj.usuario == "admin" && obj.password == "admin";
    return this.ingresar;
  }
  public habilitarLogeo(){
    return this.ingresar;
  }

  //login

  //datos del api con el metodo get
  public get(url:string){
    return this.http.get(url)
  }

  //datos del api

}