import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {PeticionesService} from '../../../services/peticiones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private route:ActivatedRoute, private peticiones:PeticionesService) {
    this.route.url
    .subscribe( parametros=>{
      console.log(parametros[0].path);
    });
  }
  ngOnInit() {
  }

}
