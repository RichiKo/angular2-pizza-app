import { Routes } from '@angular/router';

import { PizzaListComponent } from '../components/pizzalist.component';
import { PizzaDetailComponent } from '../components/pizzadetail.component';

export const PizzaRoutes: Routes = [
  { path: '', component: PizzaListComponent },
  { path: 'pizzadetail/:id', component: PizzaDetailComponent }
];
