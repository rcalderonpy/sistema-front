import { Component } from '@angular/core';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {Router, ActivatedRoute } from '@angular/router';
import { PeticionesService } from './services/peticiones.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public title = 'app';
  public identity;
  public token;
  public menu;



  constructor(private route:Router,
              private _ruta:ActivatedRoute,
              private _ps:PeticionesService,
              private _userService:UserService
            ) {
    this.identity=this._userService.getIdentity();
    this.token=this._userService.getToken();
    //this.menu='principal';

  }


  onActivate(event){
    console.log(event);
    window.setTimeout(()=>{
      console.log(event.menu);
      this.menu=event.menu;
    },500);

  }


}
