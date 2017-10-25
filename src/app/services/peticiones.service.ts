import { Injectable, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {ActivatedRoute} from '@angular/router';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';


@Injectable()
export class PeticionesService implements OnInit{

  urlContribuyente:string="https://servicios.set.gov.py/EsetApiWSClient/contribuyente";
  rutaActual:string = "";

  constructor(private http:Http, private route:ActivatedRoute) {
  }

  ngOnInit(){

  }

  getContribuyente(rucont:any, dvcont:number){
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let params:string = 'dv='+dvcont+'&ruc='+rucont;
    console.log(params);

    return this.http.post( this.urlContribuyente, params, {headers: headers} )
    .map(res =>{
      console.log(res);
      return res.json()
    })
  }

  calcularDV(numero:string, basemax:number):string{
    let codigo:number;
    let numero_al:string="";
    let resto:number;
    let digito:string;

    // console.log(numero);


    for(let i=0; i < numero.length; i++){
      let c:string="";
      c = numero.substr( i, 1);
      // console.log(c);
      codigo = (c.toUpperCase()).charCodeAt(0);


      if(!(codigo >= 48 && codigo <= 57)){
        numero_al = numero_al + codigo
      } else {
        numero_al = numero_al + c
      }
    }
    // console.log(numero_al);

    let k:number;
    let total:number;
    k = 2;
    total = 0;

    // console.log(numero_al.length);
    for(let i=numero_al.length-1; i >= 0; i--){
      // console.log(i);
      if(k > basemax){
        k = 2;
      }

      let numero_aux:number;
      numero_aux = +numero_al.substr(i,1);
      total = total + (numero_aux * k)
      k = k + 1
    }


    resto = total % 11;
    if(resto > 1){
      digito = (11 - resto).toString();
    } else {
      digito = '0';
    }

    console.log(digito);
    return digito;

  }

}
