import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {PeticionesService} from '../../../services/peticiones.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public identity:any;

  constructor(
          private route:ActivatedRoute,
          private _router:Router,
          private peticiones:PeticionesService,
          private _userService:UserService
  ) {
    this.identity = this._userService.getIdentity();
    this.route.url
    .subscribe( parametros=>{
      console.log(parametros[0].path);
    });
  }
  ngOnInit() {
    console.log(this.identity);
    if(this.identity == null || !this.identity.sub){
      this._router.navigate(['/login']);
    } else {

    }
  }

}
