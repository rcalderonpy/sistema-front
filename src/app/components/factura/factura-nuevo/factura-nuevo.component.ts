import { Component, OnInit, ViewChild, AfterViewInit, DoCheck} from '@angular/core';
import { UserService } from '../../../services/user.service';
import {Router, ActivatedRoute } from '@angular/router';
import {FacturaService} from '../../../services/factura.service';
import {PeticionesService} from '../../../services/peticiones.service';
import {ClienteService} from '../../../services/cliente.service';
import {CalculosService} from '../../../services/calculos.service';
import { jqxNumberInputComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxnumberinput';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

declare var $:any;

@Component({
  selector: 'app-factura-nuevo',
  templateUrl: './factura-nuevo.component.html'

})
export class FacturaNuevoComponent implements OnInit, DoCheck {
  public values: number[] = [102, 115, 130, 137];
  public identity:any;
  public token:any;
  public forma:FormGroup;
  public factura:any={
    nsuc:'001',
    npe:'001',
    ncomp:'',
    fecha: new Date(),
    timbrado:'12345678',
    condicion:'contado',
    cuotas:0,
    moneda:'PYG',
    ruc:'0',
    dv:'0',
    cliente:'',
    direccion:'',
    descuento:0,
    total_factura:0,
    iva10:0,
    iva5:0,
    detalle:[]
  };
  public condiciones = [
    {value: 'contado', viewValue: 'Contado'},
    {value: 'plazo', viewValue: 'Plazo'}
  ];
  public monedas = [
    {value: 'PYG', viewValue: 'PYG'},
    {value: 'USD', viewValue: 'USD'}
  ];

  public detalle:any={
    concepto: '',
    recibo: 0,
    exentas: 0,
    gravadas5: 0,
    gravadas10: 0
  }

  detalleFactura:any[]=[];

  subtotales:any={
    strecibo:0,
    stexentas:0,
    stgrav5:0,
    stgrav10:0
  }

  constructor(
          private route:ActivatedRoute,
          private _router:Router,
          private _userService:UserService,
          private _facturaService:FacturaService,
          private _calculoService:CalculosService,
          private _ps:PeticionesService,
          private _cs:ClienteService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

  }


  ngOnInit() {
    $('.numerico').number( true, 2, ',', '.').focus(function(){
      this.select();
    });

    if(this.identity == null || !this.identity.sub){
      this._router.navigate(['/login']);
    } else {
      this.siguienteNumero(); // coloca por defecto la siguiente factura punto exp 001
    }
  }

  ngDoCheck(){

  }

  nuevaFactura(){

    // Actualiza el Total de la factura y los ivas
    // console.log('subtotales', this.subtotales);

    this.factura.total_factura=
      parseFloat(this.subtotales.stexentas)+
      parseFloat(this.subtotales.stgrav5)+
      parseFloat(this.subtotales.stgrav10);
    this.factura.iva5 = this._calculoService.sacarIva5(this.subtotales.stgrav5);
    this.factura.iva10 = this._calculoService.sacarIva10(this.subtotales.stgrav10);
    for(let detalle in this.detalleFactura){
      this.factura.detalle.push(this.detalleFactura[detalle]);
    }
    console.log(this.factura);

    // utiliza el servicio de guardar factura
    this._facturaService.nuevaFactura(this.factura).subscribe(
      res => {
        console.log(res);
        if(res.status=='success'){
          this._router.navigate(['/factura/lista']);
        } else {
          alert(res.msg);
        }
      }
    )
  }

  getDV(){
    let dv=this._ps.calcularDV(this.factura.ruc,11);
    if(dv){
      this.factura.dv=dv;
    }
    this._cs.getClienteRuc(this.factura.ruc).subscribe(
      res=>{
        if(res.code == 200){
          this.factura.cliente = res.cliente[0].nombres + ' ' + res.cliente[0].ape1 + ' ' + res.cliente[0].ape2;
        } else {
          this.factura.cliente = '';
        }
        console.log(res);
      },
      error=>{
        this.factura.cliente = '';
        console.log('se produce el error');
      }
    )
  }

  guardar(forma:any){
    console.log(forma);
  }

  sumarDetalle(){
    this.subtotales.strecibo=0;
    this.subtotales.stexentas=0;
    this.subtotales.stgrav5=0;
    this.subtotales.stgrav10=0;

    for(let detalle in this.detalleFactura){
      this.subtotales.strecibo = this.subtotales.strecibo + this.detalleFactura[detalle]['recibo'];
      this.subtotales.stexentas = this.subtotales.stexentas + this.detalleFactura[detalle]['exentas'];
      this.subtotales.stgrav5 = this.subtotales.stgrav5 + this.detalleFactura[detalle]['gravadas5'];
      this.subtotales.stgrav10 = this.subtotales.stgrav10 + this.detalleFactura[detalle]['gravadas10'];
    }
    console.log(this.subtotales);
  }

  agregarLinea(concepto, recibo, exentas, gravadas5, gravadas10){
    recibo = this._calculoService.numeroPuntos(recibo);
    exentas = this._calculoService.numeroPuntos(exentas);
    gravadas5 = this._calculoService.numeroPuntos(gravadas5);
    gravadas10 = this._calculoService.numeroPuntos(gravadas10);

    this.detalleFactura.push(
      {
        concepto: concepto,
        recibo: parseFloat(recibo),
        exentas: parseFloat(exentas),
        gravadas5: parseFloat(gravadas5),
        gravadas10: parseFloat(gravadas10)
      }
    );
    console.log(gravadas10);
    this.sumarDetalle();
    this.detalle={
      concepto: '',
      recibo: 0,
      exentas: 0,
      gravadas5: 0,
      gravadas10: 0
    }
    $('#concepto').focus();

  }

  borrarLinea(id){
    console.log('objeto a borrar', id);
    this.detalleFactura.splice(id,1);
    this.sumarDetalle();
    alert('Elemento eliminado');
  }

  siguienteNumero(){
    this._facturaService.getUltimoNumero(this.factura.nsuc, this.factura.npe).subscribe(
      res=>{
        // console.log(res);
        // console.log(res.ultimo_numero);

        let ultimo = res.ultimo_numero;
        let ultimo_int = parseInt(ultimo);
        let nuevo_int = ultimo_int+1;
        console.log(nuevo_int);
        let nuevo_str = ('0000000'+nuevo_int.toString()).substr(-7);
        // console.log(nuevo_str);
        this.factura.ncomp = nuevo_str;


      }
    );

  }


}
