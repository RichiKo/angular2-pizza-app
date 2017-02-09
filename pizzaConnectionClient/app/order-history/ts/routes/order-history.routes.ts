import { Routes } from '@angular/router';
import { OrderHistoryComponent } from '../components/order-history.component';
import {Bouncer} from '../../../login/ts/components/bouncer.component';


export const OrderHistoryRoutes: Routes = [
  { path: 'orderhistory', component: OrderHistoryComponent, canActivate: [Bouncer] }
];