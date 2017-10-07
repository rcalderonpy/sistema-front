import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styles: []
})
export class UsuarioListaComponent implements OnInit {

  public usuarios:any;
  public identity:any;

  constructor(
          private route:ActivatedRoute,
          private _router:Router,
          private _userService:UserService
  ) {
    this.identity = this._userService.getIdentity();
  }

  ngOnInit() {
    if(this.identity == null || !this.identity.sub){
      this._router.navigate(['/login']);
    } else {
      this._userService.listaUsuarios(this._userService.identity).subscribe(
        res => {
          this.usuarios = res;
          console.log(this.usuarios);
        }
      )
    }
  }

  nuevoUsuario(){
    this._router.navigate(['/usuario/nuevo']);    
  }

}
