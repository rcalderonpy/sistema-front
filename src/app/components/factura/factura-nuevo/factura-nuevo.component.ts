import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {Router, ActivatedRoute } from '@angular/router';
import {FacturaService} from '../../../services/factura.service';
import {PeticionesService} from '../../../services/peticiones.service';
import {CalculosService} from '../../../services/calculos.service';


@Component({
  selector: 'app-factura-nuevo',
  templateUrl: './factura-nuevo.component.html'
})
export class FacturaNuevoComponent implements OnInit {
  public identity:any;
  public token:any;
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
    dirección:'',
    descuento:'0',
    total_factura:'0',
    iva10:'0',
    iva5:'0'
  };
  public condiciones = [
    {value: 'contado', viewValue: 'Contado'},
    {value: 'plazo', viewValue: 'Plazo'}
  ];
  public monedas = [
    {value: 'PYG', viewValue: 'Guaraníes'},
    {value: 'USD', viewValue: 'Dólares'}
  ];

  constructor(
          private route:ActivatedRoute,
          private _router:Router,
          private _userService:UserService,
          private _facturaService:FacturaService,
          private _calculoService:CalculosService,
          private _ps:PeticionesService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    if(this.identity == null || !this.identity.sub){
      this._router.navigate(['/login']);
    } else {
      // this.factura.fecha = this._calculoService.fechaTexto(new Date());
      // this.mostrarFecha();

    }
  }

  nuevaFactura(){
    this._facturaService.nuevaFactura(this.factura).subscribe(
      res => {
        console.log(res);
        this._router.navigate(['/factura/lista']);
      }
    )
    // console.log(this.cliente);
  }

  getDV(){
    let dv=this._ps.calcularDV(this.factura.ruc,11);
    if(dv){
      this.factura.dv=dv;
    }
  }

  mostrarFecha(){
    console.log(this.factura.fecha)
  }

}
