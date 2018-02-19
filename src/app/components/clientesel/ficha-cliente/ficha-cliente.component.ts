import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ClienteService } from '../../../services/cliente.service';
import { ParametrosService } from '../../../services/parametros.service';
import {Router, ActivatedRoute, Params } from '@angular/router';
import { Title }     from '@angular/platform-browser';

declare var $:any;

@Component({
  selector: 'app-ficha-cliente',
  templateUrl: './ficha-cliente.component.html'
})

export class FichaClienteComponent implements OnInit {

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
  public estados_cliente:any;
  public codigo_estados:any=[];
  public estado_texto:string;
  public urlcedula:string='../../../assets/img/cedulas/';
  public cianv:any;
  public cirev:any;
  constructor(
          private _route:ActivatedRoute,
          private _router:Router,
          private _userService:UserService,
          private _clienteService:ClienteService,
          private titleService: Title,
          private _ps:ParametrosService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this._ps.getEstadosCliente().subscribe(res=>{
      this.estados_cliente=res.estados;
      console.log(this.estados_cliente);
      for(let estado of this.estados_cliente){
        console.log('estado', estado);
        this.codigo_estados.push({codigo:estado.codigo, descripcion:estado.descripcion})
      }
      console.log('codigo_estados', this.codigo_estados);
    });

  }

  ngOnInit() {

    $('.numerico').number( true, 2, ',', '.');

    if(this.identity == null || !this.identity.sub){
      this._router.navigate(['/login']);
    } else {
      this._route.parent.params.forEach((params:Params)=>{
        let cliente_id = +params['id'];
        this.cliente.id = cliente_id;
        console.log(this.cliente.id);

        // carga cédulas
        // this.cianv=`${this.urlcedula}${this.cliente.id}a.jpg`;
        // this.cirev=`${this.urlcedula}${this.cliente.id}r.jpg`;

        // conseguir datos del cliente
        this._clienteService.getCliente(this.cliente.id).subscribe(
          res=>{
            console.log(res);
            this.cliente = res.cliente[0];
            this.setTitle(this.cliente.nombres+' '+this.cliente.ape1+' '+this.cliente.ape2);
            console.log(this.cliente);

            // vincular el estado

              for(let estado of this.codigo_estados){
                console.log('estado', estado);
                if(estado.codigo==this.cliente.estado){this.estado_texto=estado.descripcion}
              }
              console.log('estado_texto', this.estado_texto);


          }
        )

      })

    }
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

}
