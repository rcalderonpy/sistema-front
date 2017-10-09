import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {Router, ActivatedRoute } from '@angular/router';
import {ClienteService} from '../../../services/cliente.service';
import {PeticionesService} from '../../../services/peticiones.service';

@Component({
  selector: 'app-cliente-nuevo',
  templateUrl: './cliente-nuevo.component.html'
})
export class ClienteNuevoComponent implements OnInit {
  public identity:any;
  public token:any;
  public cliente:any={
    ruc:'',
    dv:'',
    nombres:'',
    ape1:'',
    ape2:''
  };

  constructor(
          private route:ActivatedRoute,
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

    }
  }

  nuevoCliente(){
    this._clienteService.nuevoCliente(this.cliente).subscribe(
      res => {
        console.log(res);
        this._router.navigate(['/cliente/lista']);
      }
    )
    // console.log(this.cliente);
  }

  getDV(){
    let dv=this._ps.calcularDV(this.cliente.ruc,11);
    if(dv){
      this.cliente.dv=dv;
    }
  }

}
