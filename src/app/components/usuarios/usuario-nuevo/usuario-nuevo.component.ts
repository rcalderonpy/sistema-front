import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  public identity:any;
  public usuario:any;

  constructor(
          private route:ActivatedRoute,
          private _router:Router,
          private _userService:UserService
  ) {
    this.identity = this._userService.getIdentity();
    this.usuario = {
      'nombre':'',
      'apellido':'',
      'email':'',
      'password':''
    };

  }

  ngOnInit() {
    // if(this.identity == null || !this.identity.sub){
    //   this._router.navigate(['/login']);
    // } else {
    //
    // }
  }

  guardarUsuario(){
    console.log(this.usuario);
    this._userService.nuevoUsuario(this.usuario).subscribe(
      response => {
        console.log(response);
      }
    );
  }

}
