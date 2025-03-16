import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pantallas/login/login.component";
import {NuevoComponent} from "./pantallas/nuevo/nuevo.component";
import {EditarComponent} from "./pantallas/editar/editar.component";
import {DashboardComponent} from "./pantallas/dashboard/dashboard.component";



const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"nuevo",component:NuevoComponent},
  {path:"editar",component:EditarComponent},
  {path:"dashboard",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DashboardComponent]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent,NuevoComponent,EditarComponent]

