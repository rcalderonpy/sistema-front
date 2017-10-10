import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {Router, ActivatedRoute, Params } from '@angular/router';
import {ClienteService} from '../../../services/cliente.service';
import {PeticionesService} from '../../../services/peticiones.service';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styles: []
})
export class ClienteEditarComponent implements OnInit {
  public identity:any;
  public token:any;
  public cliente:any={
    id:'',
    ruc:'',
    dv:'',
    nombres:'',
    ape1:'',
    ape2:'',
    estado:''
  };

  constructor(
          private _route:ActivatedRoute,
          private _router:Router,
          private _userService:UserService,
          private _clienteService:ClienteService,
          private _ps:PeticionesService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    if(this.identity == null || !this.identity.sub){
      this._router.navigate(['/login']);
    } else {
      this._route.params.forEach((params:Params)=>{
        let cliente_id = +params['id'];

        this.cliente.id = cliente_id;
        console.log('id_cliente',this.cliente.id);
        this._clienteService.getCliente(this.cliente.id).subscribe(
          res=>{
            console.log(res);
            this.cliente = res.cliente[0];
            console.log(this.cliente);

          }
        )

      })

    }
  }

  actualizarCliente(){
    this._clienteService.editarCliente(this.cliente).subscribe(
      res => {
        console.log(res);
        this._router.navigate(['/cliente/lista']);
      }
    )
    // console.log(this.cliente);
  }

}
