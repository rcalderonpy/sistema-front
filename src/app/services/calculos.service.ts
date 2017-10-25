import { Injectable } from '@angular/core';

@Injectable()
export class CalculosService {

  constructor() { }

  fechaTexto(fecha){
    let dia=fecha.getDate();
    let mes=fecha.getMonth()+1;
    let ano=fecha.getFullYear();

    let nuevafecha:string;

    nuevafecha = ano+'-'+mes+'-'+dia;

    return nuevafecha;
  }

  numeroPuntos(texto){
    texto = texto.split('.').join('');
    texto = texto.replace(',','.');
    return texto;
  }

  sacarIva5(monto:number, decimales=null){
    let iva:any;
    if(decimales){
      iva = (monto / 21).toFixed(0);
    } else {
      iva = (monto / 21).toFixed(decimales);
    }
    return iva;
  }
  sacarIva10(monto:number, decimales=null){
    let iva:any;
    if(decimales){
      iva = (monto / 11).toFixed(0);
    } else {
      iva = (monto / 11).toFixed(decimales);
    }
    return iva;
  }
}
