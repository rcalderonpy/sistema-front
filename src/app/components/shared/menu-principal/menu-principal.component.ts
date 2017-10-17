import { Component, DoCheck } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { jqxNavigationBarComponent } from '../../../../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnavigationbar';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styles: []
})
export class MenuPrincipalComponent implements DoCheck {
  public isHome=false;
  public url_actual:string;
  width: number = 100;
  height: number = 460;
  constructor(private _ruta:ActivatedRoute) {

  }

  ngDoCheck() {
    // this._ruta.firstChild.url
    // .subscribe( parametros=>{
    //   console.log(parametros[0].path);
    //   this.url_actual=parametros[0].path;
    // });
  }

}
