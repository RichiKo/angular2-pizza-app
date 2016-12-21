import { Routes, RouterModule } from '@angular/router';
import { HomeRoutes } from './home/ts/routes/home.routes';
import { PizzaRoutes } from './pizza/ts/routes/pizza.routes';

export const routes: Routes = [
  ...HomeRoutes,
  ...PizzaRoutes
];

export const routing = RouterModule.forRoot(routes, { useHash: true });