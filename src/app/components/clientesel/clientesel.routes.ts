import { Routes } from '@angular/router';
import {
  FichaClienteComponent,
  // ClienteNuevoComponent,
  // ClienteEditarComponent,
  // ClienteDetalleComponent
} from './clientesel.index';


export const CLIENTESEL_ROUTES: Routes = [
  { path: 'ficha', component: FichaClienteComponent },
  // { path: 'nuevo', component: ClienteNuevoComponent },
  // { path: 'editar/:id', component: ClienteEditarComponent },
  // { path: 'detalle/:id', component: ClienteDetalleComponent },
  // { path: 'eliminar/:id', component: ClienteListaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'ficha' }
];
