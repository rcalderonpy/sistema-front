import { Component, OnInit } from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private route:Router) {
  }

  ngOnInit(){
    console.log(this.route.url);
  }
}
