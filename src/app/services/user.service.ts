import { Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from './global';

@Injectable()
export class UserService{

  public url:string;
  public identity:any;
  public token:string;
  public menu:string;

  constructor(
        private _http:Http
  ) {
    this.url = GLOBAL.url;
  }

  signup(user_to_login){
    let json = JSON.stringify(user_to_login);
    let params = "json="+json;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+'/login', params, {headers:headers})
              .map(res => res.json());
  }

  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));
    if(identity!= 'undefined'){
      this.identity = identity;
    } else {
      this.identity=null;
    }
    return this.identity;
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

  listaUsuarios(user_to_login){
    let params = "authorization="+this.getToken();
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+'/user/list',params, {headers:headers})
              .map(res => res.json());
  }

  nuevoUsuario(data){
    let json = JSON.stringify(data);
    let params = "json="+json+"&authorization="+this.getToken();
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+'/user/new',params, {headers:headers})
              .map(res => res.json());
  }

  editarUsuario(data){
    let json = JSON.stringify(data);
    let params = "json="+json+"&authorization="+this.getToken();
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+'/user/edit',params, {headers:headers})
              .map(res => res.json());
  }

  detalleUsuario(data){
    let json = JSON.stringify(data);
    let params = "json="+json+"&authorization="+this.getToken();
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+'/user/detail',params, {headers:headers})
              .map(res => res.json());
  }

}
