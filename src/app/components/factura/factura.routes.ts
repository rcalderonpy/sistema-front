import { Routes } from '@angular/router';
import {
  FacturaListaComponent,
  FacturaNuevoComponent,
  FacturaEditarComponent,
  FacturaDetalleComponent
} from './factura.index';


export const FACTURA_ROUTES: Routes = [
  { path: 'lista', component: FacturaListaComponent },
  { path: 'nuevo', component: FacturaNuevoComponent },
  { path: 'editar/:id', component: FacturaEditarComponent },
  { path: 'detalle/:id', component: FacturaDetalleComponent },
  { path: 'eliminar/:id', component: FacturaListaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'lista' }
];
