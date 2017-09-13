import { Component, OnInit } from '@angular/core';
import {PeticionesService} from '../../../services/peticiones.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-consulta-contribuyente',
  templateUrl: './consulta-contribuyente.component.html'
})
export class ConsultaContribuyenteComponent implements OnInit {

  public consulta={
    rucbus:null,
    dvbus:null
  }
  datos:any;
  constructor(public _peticiones:PeticionesService) {

  }

  ngOnInit() {
    // this.buscarContribuyente();
  }

  getDV(){
    let dv=this._peticiones.calcularDV(this.consulta['rucbus'],11);
    if(dv){
      this.consulta['dvbus']=dv;
      this._peticiones.getContribuyente(this.consulta['rucbus'], this.consulta['dvbus']).subscribe((data)=>{
        console.log(data);
        this.datos=data;
      });
    }
  }

  buscarContribuyente(forma:NgForm){
    console.log("formulario posteado");
    console.log("ngForm", forma);
    console.log("valor forma", forma.value);
    // console.log("Usuario", this.usuario);
    this._peticiones.getContribuyente(this.consulta['rucbus'], this.consulta['dvbus']).subscribe((data)=>{
      console.log(data);
      this.datos=data;
    });

  }

}
