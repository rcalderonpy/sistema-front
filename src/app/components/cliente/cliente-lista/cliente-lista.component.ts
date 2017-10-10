import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {Router, ActivatedRoute, Params } from '@angular/router';
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
  public loading:boolean=true;
  public eliminado:boolean=false;

  constructor(
          private _route:ActivatedRoute,
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
      this.conseguirClientes();
    }
  }

  conseguirClientes(){
    this.loading=true;
    this._clienteService.listaClientes().subscribe(
      res => {
        this.clientes = res.clientes;
        console.log(this.clientes);
        this.loading=false;
      }
    )
  }

  eliminarCliente(id){
    this._clienteService.eliminarCliente(id).subscribe(
      res => {
        console.log(res);
        this.eliminado=true;
        this.loading=true;
        this.conseguirClientes();
        window.setTimeout(()=>{
          this.eliminado=false;
        },3000)

      }
    );
  }

}
