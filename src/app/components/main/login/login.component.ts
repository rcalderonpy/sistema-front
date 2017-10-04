import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public title: string;
  public user: any;

  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService:UserService
  ) {
      this.title = 'Ingresar';
      this.user = {
        'email':'',
        'password':'',
        'getHash':'false'
      };
  }

  ngOnInit() {
    console.log("El componente login.component ha sido cargado!!")
  }

  onSubmit(){
    console.log(this.user);
    alert(this._userService.signup());

  }

}
