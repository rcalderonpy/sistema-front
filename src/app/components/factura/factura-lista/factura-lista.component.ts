import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {Router, ActivatedRoute, Params } from '@angular/router';
import {FacturaService} from '../../../services/factura.service';

@Component({
  selector: 'app-factura-lista',
  templateUrl: './factura-lista.component.html',
  styles: []
})
export class FacturaListaComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  public identity:any;
  public token:any;
  public facturas:any;
  public facturasf:any;
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
          private _facturaService:FacturaService
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
      this.conseguirFacturas();
    }
  }

  conseguirFacturas(){
    console.log('estamos consiguiendo las facturas');
    this.loading=true;
    this._facturaService.listaFacturas().subscribe(
      res => {
        this.facturas = res.facturas;
        this.facturasf = this.facturas;
        console.log(this.facturas);
        this.loading=false;
      }
    )
  }

  // eliminarCliente(id){
  //   this._facturaService.eliminarCliente(id).subscribe(
  //     res => {
  //       console.log(res);
  //       this.eliminado=true;
  //       this.loading=true;
  //       this.conseguirFacturas();
  //       window.setTimeout(()=>{
  //         this.eliminado=false;
  //       },3000)
  //
  //     }
  //   );
  // }

  // filtrarClientes(){
  //   console.log(this.filtros);
  //   this.facturasf=this._facturaService.filtrarClientes(this.facturas, this.filtros);
  //   console.log(this.facturasf);
  // }

  }
