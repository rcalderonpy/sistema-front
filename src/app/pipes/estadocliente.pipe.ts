import { Pipe, PipeTransform } from '@angular/core';
import {ParametrosService} from '../services/parametros.service';


@Pipe({
  name: 'estadoCliente'
})
export class estadoClientePipe implements PipeTransform {
  public estados:any;

  constructor(
        private _ps:ParametrosService
  ) {
    // console.log(this.estados);
  }

  transform(value) {
    // let estados_cliente:any;
    // let estadorel:string;
    // this._ps.getEstadosCliente().subscribe(res=>{
    //   estados_cliente=res.estados[0].descripcion;
    // });

    // let indice:any;
    // for (let i = 0; i <= estados.length; i++) {
    //   if(estados[i].codigo == value){
    //     estadorel=estados[i].descripcion;
    //   }
    // }
    let estadorel:string;
    if(value==1){
        estadorel='ACTIVO'
    } else if(value==2){
        estadorel='SUSPENDIDO'
    }

    return estadorel;
  }
}
