import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { jqxNavigationBarComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnavigationbar';


//servicios
import {PeticionesService} from './services/peticiones.service';
import {UserService} from './services/user.service';
import {GLOBAL} from './services/global';

// pipes
import {TsToDatePipe} from './pipes/tstodate.pipe';

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
          ListaFacturasComponent,
          LoginComponent
        } from './components/main/index';
import { UsuarioNuevoComponent,
         UsuarioEditarComponent
 } from './components/usuarios/index';
import { UsuarioComponent } from './components/usuarios/usuario.component';
import { UsuarioListaComponent } from './components/usuarios/usuario-lista/usuario-lista.component';

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
    ListaFacturasComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioListaComponent,
    TsToDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    PeticionesService,
    UserService,
    {provide: LOCALE_ID, useValue: "es"}
          ],
  bootstrap: [AppComponent]
})
export class AppModule { }
