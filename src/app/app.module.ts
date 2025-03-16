import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './plantillas/encabezado/encabezado.component';
import { PieComponent } from './plantillas/pie/pie.component';

import {ReactiveFormsModule, FormsModule} from "@angular/forms"

import {HttpClientModule} from "@angular/common/http";
import { IndicadoresComponent } from './indicadores/indicadores.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieComponent,
    routingComponents,
    IndicadoresComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

