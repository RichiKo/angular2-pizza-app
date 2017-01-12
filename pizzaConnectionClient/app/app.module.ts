import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InputTextModule, ButtonModule, MenubarModule, DataGridModule, PanelModule, DataListModule, GrowlModule } from 'primeng/primeng';
import { routing } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza/ts/components/pizzalist.component';
import { PizzaDetailComponent } from './pizza/ts/components/pizzadetail.component';
import { CartComponent } from './cart/ts/components/cart.component';
import { CheckoutComponent } from './checkout/ts/components/checkout.component';
import { OrderOptionComponent } from './order-option/ts/components/order-option.component';
import { LoginComponent } from './login/ts/components/login.component';

// Servises
import { PizzaListService } from './pizza/ts/services/pizzalist.service';
import { PizzaDetailService } from './pizza/ts/services/pizzadetail.service';
import { CheckoutService } from './checkout/ts/services/checkout.service';
import { AuthService } from './login/ts/services/auth.service';

// ModelImpl
import { Cart } from './cart/ts/models/cart.model';
import { Account } from './login/ts/models/account.model';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        MenubarModule,
        routing,
        HttpModule,
        DataGridModule,
        PanelModule,
        DataListModule,
        GrowlModule
    ],
    declarations: [
        AppComponent,
        PizzaListComponent,
        PizzaDetailComponent,
        CartComponent,
        CheckoutComponent,
        OrderOptionComponent,
        LoginComponent
    ],
    providers: [
        PizzaListService,
        PizzaDetailService,
        CheckoutService,
        AuthService,
        Cart,
        Account
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}





// // Place your settings in this file to overwrite the default settings
// {
//   "editor.fontSize": 0,
//   "editor.tabSize": 2,
//   "editor.formatOnSave": true,
//   "editor.renderWhitespace": "boundary",
//   "files.exclude": {
//     "**/.git": true,
//     "**/.DS_Store": true,
//     "**/*.js.map": true,
//     "**/*.js": {
//       "when": "$(basename).ts"
//     }
//   },
//   // Controls whether the editor should render indent guides
//   "editor.renderIndentGuides": true,
//   // Insert snippets when their prefix matches. Works best when 'quickSuggestions' aren't enabled.
//   "editor.tabCompletion": true,
//   "typescript.tsdk": "/home/rkolyadko/.nvm/versions/node/v4.4.6/lib/node_modules/typescript/lib",
//   "files.autoSave": "afterDelay",
//   "window.zoomLevel": 0
// }