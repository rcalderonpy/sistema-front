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

  dtOptions: DataTables.Settings = {};

  public identity:any;
  public token:any;
  public clientes:any;
  public clientesf:any;
  public filtros={
    ruc:'',
    nombre:''
  }
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

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 100,
      lengthMenu:[2,20,100],
      language:{
        search:"Buscar datos",
        paginate: {
          first:      "<<",
          last:       ">>",
          next:       ">",
          previous:   "<"
        },
        info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
        infoEmpty: "No hay registros que mostrar",
        emptyTable: "No se encontraron registros",
        zeroRecords: "No se encontraron registros",
        infoFiltered:   "(filtrado de _MAX_ registros totales)",
        lengthMenu:'Mostrar <select>'+
          '<option value="2">2</option>'+
          '<option value="50">50</option>'+
          '<option value="100">100</option>'+
          '<option value="500">500</option>'+
          '<option value="-1">Todos</option>'+
          '</select> registros'
      }
    };


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
        this.clientesf = this.clientes;
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

  filtrarClientes(){
    console.log(this.filtros);
    this.clientesf=this._clienteService.filtrarClientes(this.clientes, this.filtros);
    console.log(this.clientesf);
  }

}
