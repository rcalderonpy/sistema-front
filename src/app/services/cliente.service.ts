import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from './global';
import {UserService} from './user.service';

@Injectable()
export class ClienteService {
  public url:string;

  constructor(
        private _http:Http,
        private _userService:UserService
  ) {
    this.url = GLOBAL.url;
  }

  listaClientes(){
    let params = "authorization="+this._userService.getToken();
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+'/contabilidad/cliente/list',params, {headers:headers})
              .map(res => res.json());
  }

  nuevoCliente(data){
    let json = JSON.stringify(data);
    let params = "json="+json+"&authorization="+this._userService.getToken();
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+'/contabilidad/cliente/new',params, {headers:headers})
              .map(res => res.json());
  }

  editarCliente(data_nueva){
    let json = JSON.stringify(data_nueva);
    let params = "json="+json+"&authorization="+this._userService.getToken();
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+'/contabilidad/cliente/edit',params, {headers:headers})
              .map(res => res.json());
  }

  getCliente(id_cliente){
    let json = JSON.stringify({'id_cliente':id_cliente});
    let params = "json="+json+"&authorization="+this._userService.getToken();
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+'/contabilidad/cliente/detail',params, {headers:headers})
              .map(res => res.json());
  }

}
