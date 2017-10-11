import { Routes } from '@angular/router';
import {
  ClienteListaComponent,
  ClienteNuevoComponent,
  ClienteEditarComponent,
  ClienteDetalleComponent
} from './cliente.index';


export const CLIENTE_ROUTES: Routes = [
  { path: 'lista', component: ClienteListaComponent },
  { path: 'nuevo', component: ClienteNuevoComponent },
  { path: 'editar/:id', component: ClienteEditarComponent },
  { path: 'detalle/:id', component: ClienteDetalleComponent },
  { path: 'eliminar/:id', component: ClienteListaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'lista' }
];
