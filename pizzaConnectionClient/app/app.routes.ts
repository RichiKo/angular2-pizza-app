import { Routes, RouterModule } from '@angular/router';
import { PizzaRoutes } from './pizza/ts/routes/pizza.routes';

export const routes: Routes = [
  ...PizzaRoutes
];

export const routing = RouterModule.forRoot(routes, { useHash: true });