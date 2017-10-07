import {  Routes } from '@angular/router';
import {  UsuarioNuevoComponent,
          UsuarioEditarComponent,
          UsuarioListaComponent
        } from './index';

export const USUARIO_ROUTES: Routes = [
  { path: 'lista', component: UsuarioListaComponent },
  { path: 'nuevo', component: UsuarioNuevoComponent },
  { path: 'editar/:id', component: UsuarioEditarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'lista'  }
];
