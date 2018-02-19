import { Component, OnInit, OnChanges } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {UserService} from '../../../services/user.service';
import {ClienteService} from '../../../services/cliente.service';
import {ParametrosService} from '../../../services/parametros.service';

@Component({
  selector: 'app-seleccionar-cliente',
  templateUrl: './seleccionar-cliente.component.html',
  styles: []
})
export class SeleccionarClienteComponent implements OnInit, OnChanges {
  public identity:any;
  public menu:string;
  public loading:boolean=true;
  public clientes:any;
  public clientesf:any;
  public filtros={
    ruc:'',
    nombre:'',
    vencimiento:''
  }
  dtOptions: DataTables.Settings = {};

  constructor(
          private route:ActivatedRoute,
          private _router:Router,
          private _userService:UserService,
          private _ps:ParametrosService,
          private _clienteService:ClienteService
  ) {
    this.identity = this._userService.getIdentity();
    _ps.getEstadosCliente().subscribe(res=>{
      console.log(res);
    });
  }

  ngOnInit() {
    this.menu='principal';

    if(this.identity == null || !this.identity.sub){
      this._router.navigate(['/login']);
    } else {
      this.conseguirClientes();
    }
  }

  ngOnChanges() {

    this.filtrarClientes();
  }

  conseguirClientes(){
    this.loading=true;
    this._clienteService.listaClientes().subscribe(
      res => {
        this.clientes = res.clientes;
        this.clientesf = this.clientes;
        console.log(this.clientes);
        this.loading=false;
      }
    )
  }

  filtrarClientes(){
    console.log(this.filtros);
    this.clientesf=this._clienteService.filtrarClientes(this.clientes, this.filtros);
    console.log(this.clientesf);
  }

}
