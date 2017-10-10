import { Routes } from '@angular/router';
import {
  ClienteListaComponent,
  ClienteNuevoComponent,
  ClienteEditarComponent
} from './cliente.index';


export const CLIENTE_ROUTES: Routes = [
  { path: 'lista', component: ClienteListaComponent },
  { path: 'nuevo', component: ClienteNuevoComponent },
  { path: 'editar/:id', component: ClienteEditarComponent },
  { path: 'eliminar/:id', component: ClienteListaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'lista' }
];
