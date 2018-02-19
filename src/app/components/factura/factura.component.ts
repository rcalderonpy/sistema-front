import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styles: []
})
export class FacturaComponent implements OnInit {
  public menu:string;
  @Output() pasameLosDatos = new EventEmitter();
  @Output() menu_output:string;

  constructor(private _us:UserService) { }

  ngOnInit() {
    this.menu='principal';
    this.emitirEvento();
    this.menu_output='cliente';
  }

  emitirEvento(){
    this.pasameLosDatos.emit({
      'menu_elegido':this.menu
    })
  }

}
