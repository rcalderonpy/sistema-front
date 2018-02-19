import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { jqxNavigationBarComponent } from '../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnavigationbar';


//servicios
import {PeticionesService} from './services/peticiones.service';
import {UserService} from './services/user.service';
import {FacturaService} from './services/factura.service';
import {ClienteService} from './services/cliente.service';
import {CalculosService} from './services/calculos.service';
import {GLOBAL} from './services/global';
import {ParametrosService} from './services/parametros.service';

// pipes
import {TsToDatePipe} from './pipes/tstodate.pipe';
import {estadoClientePipe} from './pipes/estadocliente.pipe';

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

//pipes


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

// Cliente Seleccionado
import { ClienteselComponent } from './components/clientesel/clientesel.component';
import {  FichaClienteComponent
        } from './components/clientesel/clientesel.index';

// Facturas
import { FacturaComponent } from './components/factura/factura.component';
import {  FacturaListaComponent,
          FacturaNuevoComponent,
          FacturaEditarComponent,
          FacturaDetalleComponent
        } from './components/factura/factura.index';

//Componentes especiales
import { DataTablesModule } from 'angular-datatables';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatTableModule
} from '@angular/material';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { jqxBarGaugeComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbargauge';
import { jqxNumberInputComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxnumberinput';
// import { CurrencyMaskModule } from "ng2-currency-mask";
import { CurrencyMaskModule } from "ngx-currency-mask";
import { FacturaReportesComponent } from './components/factura/factura-reportes/factura-reportes.component';
import { PdfViewerComponent } from 'ng2-pdf-viewer';



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
    estadoClientePipe,
    ClienteComponent,
    ClienteListaComponent,
    ClienteNuevoComponent,
    ClienteEditarComponent,
    ClienteDetalleComponent,
    ClienteselComponent,
    FichaClienteComponent,
    FacturaComponent,
    FacturaListaComponent,
    FacturaNuevoComponent,
    FacturaEditarComponent,
    FacturaDetalleComponent,
    jqxBarGaugeComponent,
    jqxNumberInputComponent,
    FacturaReportesComponent,
    PdfViewerComponent,
    FichaClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    APP_ROUTING,
    DataTablesModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTableModule,
    CurrencyMaskModule

  ],
  providers: [
    PeticionesService,
    Title,
    UserService,
    ClienteService,
    FacturaService,
    CalculosService,
    ParametrosService,
    {provide: LOCALE_ID, useValue: "es"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
