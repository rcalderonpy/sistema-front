import { Component, AfterContentInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { jqxNavigationBarComponent } from '../../../../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnavigationbar';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styles: []
})
export class MenuPrincipalComponent implements AfterContentInit {
  public isHome=false;
  width: number = 100;
  height: number = 460;
  constructor(private route:ActivatedRoute) {

  }

  ngAfterContentInit() {
    this.route.url
    .subscribe( parametros=>{
      console.log(parametros[0].path);
    });
  }

}
