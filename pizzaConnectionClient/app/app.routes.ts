import { Routes, RouterModule } from '@angular/router';
import { PizzaRoutes } from './pizza/ts/routes/pizza.routes';
import { CartRoutes } from './cart/ts/routes/cart.routes';
import { CheckoutRoutes } from './checkout/ts/routes/checkout.routes';
import { OrderOptionRoutes } from './order-option/ts/routes/order-option.routes';

export const routes: Routes = [
  ...PizzaRoutes,
  ...CartRoutes,
  ...CheckoutRoutes,
  ...OrderOptionRoutes
];

export const routing = RouterModule.forRoot(routes, { useHash: true });