import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: []
})
export class ClienteComponent implements OnInit {
  public menu:string;
  constructor() { }

  ngOnInit() {
    this.menu='principal';
  }

}
