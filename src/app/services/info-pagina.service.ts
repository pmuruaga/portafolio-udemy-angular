import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../pages/interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient ) {
    console.log('Servicio de InfoPagina Listo');

    //Leer Archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        //console.log(resp);
        this.cargada = true;
        this.info = resp;

        console.log(this.info["twitter"]);
      });
  }
}
