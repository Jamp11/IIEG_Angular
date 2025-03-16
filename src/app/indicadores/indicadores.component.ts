import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface IApiResponse {
  success: boolean;
  message: string;
  data: ITransportData[];
}

interface ITransportData {
  _id: string;
  Anio: number;
  ID_mes: number;
  Transporte: string;
  Variable: string;
  ID_entidad_unico: string;
  ID_entidad: number;
  Entidad: string;
  ID_municipio_unico: string;
  ID_Municipio: number;
  Municipio: string;
  Valor: number;
  Estatus: string;
}

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent implements OnInit {

  public transportData: ITransportData[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<IApiResponse>('http://apiiieg.jalisco.gob.mx/api/etup').subscribe((respuesta) => {
      if (respuesta.success) {
        console.log(respuesta.data);
        this.transportData = respuesta.data;
      } else {
        console.error('Error en la respuesta de la API:', respuesta.message);
      }
    }, (error) => {
      console.error('Error al obtener los datos:', error);
    });
  }
}
