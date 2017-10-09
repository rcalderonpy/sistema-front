import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {Router, ActivatedRoute } from '@angular/router';
import {ClienteService} from '../../../services/cliente.service';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styles: []
})
export class ClienteListaComponent implements OnInit {

  public identity:any;
  public token:any;
  public clientes:any;

  constructor(
          private route:ActivatedRoute,
          private _router:Router,
          private _userService:UserService,
          private _clienteService:ClienteService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    if(this.identity == null || !this.identity.sub){
      this._router.navigate(['/login']);
    } else {
      this._clienteService.listaClientes().subscribe(
        res => {
          this.clientes = res.clientes;
          console.log(this.clientes);
        }
      )
    }
  }

}
