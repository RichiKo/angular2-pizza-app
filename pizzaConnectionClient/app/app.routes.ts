import { Routes, RouterModule } from '@angular/router';
import { PizzaRoutes } from './pizza/ts/routes/pizza.routes';
import { CartRoutes } from './cart/ts/routes/cart.routes';
import { CheckoutRoutes } from './checkout/ts/routes/checkout.routes';

export const routes: Routes = [
  ...PizzaRoutes,
  ...CartRoutes,
  ...CheckoutRoutes
];

export const routing = RouterModule.forRoot(routes, { useHash: true });