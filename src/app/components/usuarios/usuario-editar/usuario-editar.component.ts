import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styles: []
})
export class UsuarioEditarComponent implements OnInit {
  public identity:any;
  public token:any;
  public usuario:any;
  public id_usuario:any={
    'id':0
  }
  public detalle_usuario:any;

  constructor(
          private _route:ActivatedRoute,
          private _router:Router,
          private _userService:UserService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

    //obtener parametro id de la ruta
    this._route.params.forEach((params:Params)=>{
      let id_usuario = +params['id'];
      if(id_usuario){
        console.log('id_usuario',id_usuario);
        this.id_usuario.id = id_usuario;

        this._userService.detalleUsuario(this.id_usuario).subscribe(
          res=>{

            console.log(res.user);
            this.usuario = res.user;
          }
        );

      }
    })

    // console.log(this.detalle_usuario);

    this.usuario = {
      'nombre':this.identity.nombre,
      'apellido':this.identity.apellido,
      'email':this.identity.email,
      'password':this.identity.password
    }
    console.log(this.identity);

  }

  ngOnInit() {
    if(this.identity == null || !this.identity.sub){
      this._router.navigate(['/login']);
    } else {

    }
  }

  guardarUsuario(){
    console.log(this.usuario);
    this._userService.editarUsuario(this.usuario).subscribe(
      response => {
        console.log(response);
        this._userService.signup(this.usuario)
            .subscribe(res=>{
              console.log('nuevo identity',res)

              // this._router.navigate(['/usuario/lista']);
            })
      }
    );
  }

}
