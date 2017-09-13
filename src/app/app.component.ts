import { Component } from '@angular/core';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {Router, ActivatedRoute } from '@angular/router';
import { PeticionesService } from './services/peticiones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';

  constructor(private route:Router,
              private _ps:PeticionesService) {

  }

}
