import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../pages/interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) {
    console.log('Servicio de InfoPagina Listo');
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    //Leer Archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        //console.log(resp);
        this.cargada = true;
        this.info = resp;

        console.log(this.info["twitter"]);
      });
  }

  private cargarEquipo(){
    //Leer Archivo JSON
    this.http.get('https://angular-html-udemy-course.firebaseio.com/Equipo.json')
      .subscribe( (resp: any[]) => {
        //console.log(resp);
        this.equipo = resp;

        console.log(resp);
      });
  }
}
