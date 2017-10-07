import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  public identity:any;

  constructor(
          private route:ActivatedRoute,
          private _router:Router,
          private _userService:UserService
  ) {
    this.identity = this._userService.getIdentity();
  }

  ngOnInit() {
  }

}
