import { RouterModule, Routes } from '@angular/router';
import {  ConsultaContribuyenteComponent,
          HomeComponent,
          LoginComponent,
          SeleccionarClienteComponent,
          ListaFacturasComponent
        } from './components/main/index';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:id', component: LoginComponent },
  { path: 'consulta-ruc', component: ConsultaContribuyenteComponent },
  { path: 'seleccionar-cliente', component: SeleccionarClienteComponent },
  { path: 'factura', component: ListaFacturasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
