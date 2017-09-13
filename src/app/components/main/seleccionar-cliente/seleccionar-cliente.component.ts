import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccionar-cliente',
  templateUrl: './seleccionar-cliente.component.html',
  styles: []
})
export class SeleccionarClienteComponent implements OnInit {
  clientes:any[]=[0,1,2,3,4];

  constructor() { }

  ngOnInit() {
  }

}
