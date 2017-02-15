"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var primeng_1 = require('primeng/primeng');
//Routing    
var app_routes_1 = require('./app.routes');
//Pipes
var pipes_module_1 = require('./pipes/pipes.module');
// Components
var app_component_1 = require('./app.component');
var pizzalist_component_1 = require('./pizza/ts/components/pizzalist.component');
var pizzadetail_component_1 = require('./pizza/ts/components/pizzadetail.component');
var cart_component_1 = require('./cart/ts/components/cart.component');
var checkout_component_1 = require('./checkout/ts/components/checkout.component');
var order_option_component_1 = require('./order-option/ts/components/order-option.component');
var login_component_1 = require('./login/ts/components/login.component');
var confirmation_component_1 = require('./confirmation/ts/components/confirmation.component');
var account_creator_component_1 = require('./account-creator/ts/components/account-creator.component');
var order_history_component_1 = require('./order-history/ts/components/order-history.component');
var bouncer_component_1 = require('./login/ts/components/bouncer.component');
var filter_component_1 = require('./filter/ts/components/filter.component');
// Servises
var pizzalist_service_1 = require('./pizza/ts/services/pizzalist.service');
var pizzadetail_service_1 = require('./pizza/ts/services/pizzadetail.service');
var checkout_service_1 = require('./checkout/ts/services/checkout.service');
var auth_service_1 = require('./login/ts/services/auth.service');
var account_creator_service_1 = require('./account-creator/ts/services/account-creator.service');
var order_history_service_1 = require('./order-history/ts/services/order-history.service');
// ModelImpl
var cart_model_1 = require('./cart/ts/models/cart.model');
var account_model_1 = require('./login/ts/models/account.model');
var filter_model_1 = require('./filter/ts/models/filter.model');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                primeng_1.InputTextModule,
                primeng_1.ButtonModule,
                primeng_1.MenubarModule,
                app_routes_1.routing,
                http_1.HttpModule,
                primeng_1.DataGridModule,
                primeng_1.PanelModule,
                primeng_1.DataListModule,
                primeng_1.GrowlModule,
                primeng_1.DataTableModule,
                primeng_1.DropdownModule,
                pipes_module_1.PipesModule
            ],
            declarations: [
                app_component_1.AppComponent,
                pizzalist_component_1.PizzaListComponent,
                pizzadetail_component_1.PizzaDetailComponent,
                cart_component_1.CartComponent,
                checkout_component_1.CheckoutComponent,
                order_option_component_1.OrderOptionComponent,
                login_component_1.LoginComponent,
                confirmation_component_1.ConfirmationComponent,
                account_creator_component_1.AccountCreatorComponent,
                order_history_component_1.OrderHistoryComponent,
                filter_component_1.FilterComponent
            ],
            providers: [
                pizzalist_service_1.PizzaListService,
                pizzadetail_service_1.PizzaDetailService,
                checkout_service_1.CheckoutService,
                auth_service_1.AuthService,
                account_creator_service_1.AccountCreatorService,
                cart_model_1.Cart,
                account_model_1.Account,
                order_history_service_1.OrderHistoryService,
                bouncer_component_1.Bouncer,
                filter_model_1.FilterModel
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
// TO-DO find Fehler bei createAccout  
//# sourceMappingURL=app.module.js.map