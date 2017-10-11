import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ClienteService } from '../../../services/cliente.service';
import {Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cliente-detalle',
  templateUrl: './cliente-detalle.component.html',
  styles: []
})
export class ClienteDetalleComponent implements OnInit {

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
  public urlcedula:string='../../../assets/img/cedulas/';
  public cianv:any;
  public cirev:any;

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
      this._route.params.forEach((params:Params)=>{
        let cliente_id = +params['id'];
        this.cliente.id = cliente_id;

        // carga cédulas
        this.cianv=`${this.urlcedula}${this.cliente.id}a.jpg`;
        this.cirev=`${this.urlcedula}${this.cliente.id}r.jpg`;

        // conseguir datos del cliente
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

}
