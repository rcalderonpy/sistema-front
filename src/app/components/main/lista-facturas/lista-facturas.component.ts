import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-lista-facturas',
  templateUrl: './lista-facturas.component.html'
})
export class ListaFacturasComponent implements OnInit {
  public identity:any;
  constructor(
          private route:ActivatedRoute,
          private _router:Router,
          private _userService:UserService
  ) {
    this.identity = this._userService.getIdentity();
  }

  ngOnInit() {
    console.log(this.identity);
    if(this.identity == null || !this.identity.sub){
      this._router.navigate(['/login']);
    }
  }

}
