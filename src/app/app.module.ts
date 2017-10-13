import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { jqxNavigationBarComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnavigationbar';


//servicios
import {PeticionesService} from './services/peticiones.service';
import {UserService} from './services/user.service';
import {FacturaService} from './services/factura.service';
import {ClienteService} from './services/cliente.service';
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

// Usuarios
import { UsuarioComponent } from './components/usuarios/usuario.component';
import { UsuarioListaComponent,
         UsuarioNuevoComponent,
         UsuarioEditarComponent
        } from './components/usuarios/index';

// Clientes
import { ClienteComponent } from './components/cliente/cliente.component';
import {  ClienteListaComponent,
          ClienteNuevoComponent,
          ClienteEditarComponent,
          ClienteDetalleComponent
        } from './components/cliente/cliente.index';

// Facturas
import { FacturaComponent } from './components/factura/factura.component';
import {  FacturaListaComponent,
          FacturaNuevoComponent,
          FacturaEditarComponent,
          FacturaDetalleComponent
        } from './components/factura/factura.index';

//Componentes especiales
import { DataTablesModule } from 'angular-datatables';

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
    TsToDatePipe,
    ClienteComponent,
    ClienteListaComponent,
    ClienteNuevoComponent,
    ClienteEditarComponent,
    ClienteDetalleComponent,
    FacturaComponent,
    FacturaListaComponent,
    FacturaNuevoComponent,
    FacturaEditarComponent,
    FacturaDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    APP_ROUTING,
    DataTablesModule
  ],
  providers: [
    PeticionesService,
    UserService,
    ClienteService,
    FacturaService,
    {provide: LOCALE_ID, useValue: "es"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
