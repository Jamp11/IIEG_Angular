import { Component } from '@angular/core';
import { ApiService } from './servicios/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'itsocompany';

  constructor(private loginPri:ApiService){
    
  }

  public VisualizarMenu():boolean{
    return this.loginPri.habilitarLogeo();
  }
}
