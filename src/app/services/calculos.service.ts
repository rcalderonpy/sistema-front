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
}
