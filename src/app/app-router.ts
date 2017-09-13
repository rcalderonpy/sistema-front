import { RouterModule, Routes } from '@angular/router';
import { ConsultaContribuyenteComponent, HomeComponent } from './components/main/index';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'consulta-ruc', component: ConsultaContribuyenteComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
