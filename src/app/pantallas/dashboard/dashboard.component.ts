import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import {HttpClient} from "@angular/common/http"
import { loginI } from 'src/app/modelos/login.interface';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  public shopping_list:any = []

  constructor(private RestService:ApiService, private http:HttpClient) { }

  ngOnInit(): void {
 
  }

  public cargarData(form:any){
    console.log(form)
    this.http.post<Response>("https://auth.itso.ga/v1/auth/login/",{
      email:form.usuario,
      password:form.password
    })
    .subscribe((data:any) =>{
    console.log(data.user)
    })
    
  }
  

}

interface datitos {
  id: string;
  name:string;
}
