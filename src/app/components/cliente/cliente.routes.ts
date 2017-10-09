import { Routes } from '@angular/router';
import {
  ClienteListaComponent,
  ClienteNuevoComponent
} from './cliente.index';


export const CLIENTE_ROUTES: Routes = [
  { path: 'lista', component: ClienteListaComponent },
  { path: 'nuevo', component: ClienteNuevoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'lista' }
];
