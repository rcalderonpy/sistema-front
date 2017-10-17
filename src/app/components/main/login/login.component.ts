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
  public identity:any;
  public token:string;
  public menu:string = 'login';

  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService:UserService
  ) {
      this.title = 'Ingresar';
      this.user = {
        'email':'',
        'password':'',
        'getHash':'true'
      };
  }

  ngOnInit() {
    console.log("El componente login.component ha sido cargado!!")
    this.logout();

  }

  logout(){
    this._route.params.forEach((params:Params)=>{
      let logout = +params['id'];
      if(logout == 1){
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        this.identity = null;
        this.token = null;

        window.location.href = '/login';
      }
    })
  }

  onSubmit(){
    console.log(this.user);

    this._userService.signup(this.user)
        .subscribe(
          response => {
            this.identity = response;
            console.log(this.identity);
            if(this.identity.length <=1){
              console.log('Error en el servidor');
            }{
              if(!this.identity.status){
                localStorage.setItem('identity', JSON.stringify(this.identity));

                // GET token
                this.user.getHash = null;
                this._userService.signup(this.user)
                    .subscribe(
                      response => {
                        this.token = response;
                        if(this.identity.length <=1){
                          console.log('Error en el servidor');
                        }{
                          if(!this.identity.status){
                            localStorage.setItem('token', JSON.stringify(this.token));

                            // redirecciona al home
                            window.location.href = '/';
                          }
                        }

                      },
                      error => {
                        console.log(<any>error);
                      }
                    );
              }
            }

          },
          error => {
            console.log(<any>error);
          }
        );

  }

}
