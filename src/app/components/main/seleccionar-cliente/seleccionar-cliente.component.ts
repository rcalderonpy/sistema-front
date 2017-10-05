import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-seleccionar-cliente',
  templateUrl: './seleccionar-cliente.component.html',
  styles: []
})
export class SeleccionarClienteComponent implements OnInit {
  public identity:any;
  clientes:any[]=[0,1,2,3,4];

  constructor(
          private route:ActivatedRoute,
          private _router:Router,
          private _userService:UserService
  ) {
    this.identity = this._userService.getIdentity();
  }

  ngOnInit() {
    console.log(this.identity);
    if(this.identity == null || !this.identity.sub){
      this._router.navigate(['/login']);
    }
  }

}
