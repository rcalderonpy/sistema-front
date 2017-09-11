import { Component, AfterContentInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styles: []
})
export class MenuPrincipalComponent implements AfterContentInit {
  public isHome=false;
  constructor(private route:ActivatedRoute) {

  }

  ngAfterContentInit() {
    this.route.url
    .subscribe( parametros=>{
      console.log(parametros[0].path);
    });
  }

}
