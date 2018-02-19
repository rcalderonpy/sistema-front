import { RouterModule, Routes } from '@angular/router';
import {  ConsultaContribuyenteComponent,
          HomeComponent,
          LoginComponent,
          SeleccionarClienteComponent,
          ListaFacturasComponent
        } from './components/main/index';
import {  UsuarioComponent } from './components/usuarios/usuario.component';
import {  USUARIO_ROUTES } from './components/usuarios/usuario.routes';
import {  ClienteComponent } from './components/cliente/cliente.component';
import {  CLIENTE_ROUTES } from './components/cliente/cliente.routes';
import {  ClienteselComponent } from './components/clientesel/clientesel.component';
import {  CLIENTESEL_ROUTES } from './components/clientesel/clientesel.routes';
import {  FacturaComponent } from './components/factura/factura.component';
import {  FACTURA_ROUTES } from './components/factura/factura.routes';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:id', component: LoginComponent },
  {
    path: 'usuario',
    component: UsuarioComponent,
    children: USUARIO_ROUTES
  },
  {
    path: 'cliente',
    component: ClienteComponent,
    children: CLIENTE_ROUTES
  },
  {
    path: 'clientesel/:id',
    component: ClienteselComponent,
    children: CLIENTESEL_ROUTES
  },
  {
    path: 'factura',
    component: FacturaComponent,
    children: FACTURA_ROUTES
  },
  { path: 'consulta-ruc', component: ConsultaContribuyenteComponent },
  { path: 'seleccionar-cliente', component: SeleccionarClienteComponent },
  { path: 'factu', component: ListaFacturasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
