import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {GLOBAL} from './global';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class ParametrosService {
  public url:string;
  public token:string;

  constructor(
        private _http:Http
  ) {
    this.url = GLOBAL.url;
  }

  getToken(){
    let token = JSON.parse(localStorage.getItem('token'));
    if(token!= 'undefined'){
      this.token = token;
    } else {
      this.token=null;
    }
    return this.token;
  }

  getEstadosCliente(){
    let params = "authorization="+this.getToken();
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+'/contabilidad/cliente/estados_cliente',params, {headers:headers})
              .map(res => res.json());
  }

}
