import { Routes } from '@angular/router';
import { AccountCreatorComponent } from '../components/account-creator.component';

export const AccountCreatorRoutes: Routes = [
  { path: 'accountcreator/:createNewAccount', component: AccountCreatorComponent }
];