import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FacturaService } from '../../../services/factura.service';
import {Router, ActivatedRoute, Params } from '@angular/router';
import * as html2canvas from 'html2canvas';

declare var $:any;
declare var jsPDF:any;

@Component({
  selector: 'app-factura-detalle',
  templateUrl: './factura-detalle.component.html',
  styles: []
})
export class FacturaDetalleComponent implements OnInit {

  public identity:any;
  public id_factura:number;
  public token:any;
  public factura:any={};
  public detalleFactura:any[]=[];
  public subtotales:any={
    strecibo:0,
    stexentas:0,
    stgrav5:0,
    stgrav10:0
  };
  pdfSrc:any;
  // pdfSrc: string = '../../../../assets/prueba.pdf';

  constructor(
          private _route:ActivatedRoute,
          private _router:Router,
          private _userService:UserService,
          private _fs:FacturaService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    if(this.identity == null || !this.identity.sub){
      this._router.navigate(['/login']);
    } else {
      this._route.params.forEach((params:Params)=>{
        let factura_id = +params['id'];
        this.id_factura = factura_id;

        // conseguir datos del cliente
        this._fs.getFactura(factura_id).subscribe(
          res=>{
            console.log(res);
            this.factura = res.factura[0];

            for(let linea in res.detalle){
              // console.log(res.detalle[linea]);
              this.detalleFactura.push(res.detalle[linea]);
            }
            this.sumarDetalle();
            console.log(this.factura);
            console.log(this.detalleFactura);

          }
        )

      })

    }
  }

  imprimirPdf(){
    this._fs.imprimirFactura(6).subscribe(
      res=>{
        this.pdfSrc = res;
      }
    )
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

}
