import { Routes, RouterModule } from '@angular/router';
import { PizzaRoutes } from './pizza/ts/routes/pizza.routes';
import { CartRoutes } from './cart/ts/routes/cart.routes';
import { CheckoutRoutes } from './checkout/ts/routes/checkout.routes';
import { OrderOptionRoutes } from './order-option/ts/routes/order-option.routes';
import { LoginRoutes } from './login/ts/routes/login.routes';

export const routes: Routes = [
  ...PizzaRoutes,
  ...CartRoutes,
  ...CheckoutRoutes,
  ...OrderOptionRoutes,
  ...LoginRoutes
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
