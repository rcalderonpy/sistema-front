import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { jqxNavigationBarComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnavigationbar';


//servicios
import {PeticionesService} from './services/peticiones.service';

//Rutas
import {APP_ROUTING} from './app-router';

// componentes comunes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MenuPrincipalComponent } from './components/shared/menu-principal/menu-principal.component';
import { MenuClienteComponent } from './components/shared/menu-cliente/menu-cliente.component';

//paginas
import {  ConsultaContribuyenteComponent,
          HomeComponent,
          SeleccionarClienteComponent,
          ListaFacturasComponent
        } from './components/main/index';


@NgModule({
  declarations: [
    AppComponent,
    ConsultaContribuyenteComponent,
    NavbarComponent,
    MenuPrincipalComponent,
    HomeComponent,
    MenuClienteComponent,
    jqxNavigationBarComponent,
    SeleccionarClienteComponent,
    ListaFacturasComponent
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
