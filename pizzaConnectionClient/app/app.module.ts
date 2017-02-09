import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {
    InputTextModule,
    ButtonModule,
    MenubarModule,
    DataGridModule,
    PanelModule,
    DataListModule,
    GrowlModule,
    DataTableModule,
    DropdownModule } from 'primeng/primeng';

//Routing    
import { routing } from './app.routes';

//Pipes
import {PipesModule} from './pipes/pipes.module';
// Components
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza/ts/components/pizzalist.component';
import { PizzaDetailComponent } from './pizza/ts/components/pizzadetail.component';
import { CartComponent } from './cart/ts/components/cart.component';
import { CheckoutComponent } from './checkout/ts/components/checkout.component';
import { OrderOptionComponent } from './order-option/ts/components/order-option.component';
import { LoginComponent } from './login/ts/components/login.component';
import { ConfirmationComponent } from './confirmation/ts/components/confirmation.component';
import { AccountCreatorComponent } from './account-creator/ts/components/account-creator.component';
import { OrderHistoryComponent } from './order-history/ts/components/order-history.component';
import { Bouncer } from './login/ts/components/bouncer.component';

// Servises
import { PizzaListService } from './pizza/ts/services/pizzalist.service';
import { PizzaDetailService } from './pizza/ts/services/pizzadetail.service';
import { CheckoutService } from './checkout/ts/services/checkout.service';
import { AuthService } from './login/ts/services/auth.service';
import { AccountCreatorService } from './account-creator/ts/services/account-creator.service';
import { OrderHistoryService } from './order-history/ts/services/order-history.service';

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
        GrowlModule,
        DataTableModule,
        DropdownModule,
        PipesModule
    ],
    declarations: [
        AppComponent,
        PizzaListComponent,
        PizzaDetailComponent,
        CartComponent,
        CheckoutComponent,
        OrderOptionComponent,
        LoginComponent,
        ConfirmationComponent,
        AccountCreatorComponent,
        OrderHistoryComponent
    ],
    providers: [
        PizzaListService,
        PizzaDetailService,
        CheckoutService,
        AuthService,
        AccountCreatorService,
        Cart,
        Account,
        OrderHistoryService,
        Bouncer

    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}





// TO-DO find Fehler bei createAccout 