import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

//servicios
import {PeticionesService} from './services/peticiones.service';

import {APP_ROUTING} from './app-router';

import { AppComponent } from './app.component';
import { ConsultaContribuyenteComponent } from './components/consulta-contribuyente/consulta-contribuyente.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { HomeComponent } from './components/home/home.component';
import { MenuClienteComponent } from './components/cliente/menu-cliente/menu-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaContribuyenteComponent,
    NavbarComponent,
    MenuPrincipalComponent,
    HomeComponent,
    MenuClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [PeticionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
