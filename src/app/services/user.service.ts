import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from './global';

@Injectable()
export class UserService {

  public url:string;
  public identity:any;
  public token:string;

  constructor(
        private _http:Http
  ) {
    this.url = GLOBAL.url;
  }

  signup(){
    return "Hola desde el Servicio";
  }

}
