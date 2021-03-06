import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
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

  getClienteRuc(ruc_cliente){
    let json = JSON.stringify({'ruc_cliente':ruc_cliente});
    let params = "json="+json+"&authorization="+this._userService.getToken();
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+'/contabilidad/cliente/detail-ruc',params, {headers:headers})
              .map(res => res.json());
  }

  eliminarCliente(id_cliente){
    let json = JSON.stringify({'id_cliente':id_cliente});
    let params = "json="+json+"&authorization="+this._userService.getToken();
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+'/contabilidad/cliente/delete',params, {headers:headers})
              .map(res => res.json());
  }

  filtrarClientes(completo:any, filtro:any){
    let filtro_clientes:any[]=[];
    let filtroLow = filtro;
    if(filtro.ruc!=''){
      filtroLow.ruc = filtro.ruc.toLowerCase();
    }
    if(filtro.nombre!=''){
      filtroLow.nombre = filtro.nombre.toLowerCase();
    }
    if(filtro.vencimiento!=''){
      filtroLow.vencimiento = filtro.vencimiento;
    }

    console.log(filtroLow);

    for (let cliente of completo ){
        console.log(cliente);
        let ruc = cliente.ruc.toLowerCase();
        let nombre = (cliente.nombres+' '+cliente.ape1+' '+cliente.ape2).toLowerCase();
        let vencim = cliente.vencimiento.toString();
        console.log(vencim);

        if(filtroLow.vencimiento!=""){
          console.log('vencimiento tiene valor')
          if( ruc.indexOf(filtroLow.ruc) >= 0 &&
              nombre.indexOf(filtroLow.nombre) >= 0 &&
              vencim == filtroLow.vencimiento.toString()
             ){
                  filtro_clientes.push(cliente);
          }
        } else {
          console.log('vencimiento esta en blanco')
          if( ruc.indexOf(filtroLow.ruc) >= 0 &&
              nombre.indexOf(filtroLow.nombre) >= 0
             ){
                  filtro_clientes.push(cliente);
          }
        }

    }

    return filtro_clientes;
  }

}
