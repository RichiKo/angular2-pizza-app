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
var app_routes_1 = require('./app.routes');
// Components
var app_component_1 = require('./app.component');
var pizzalist_component_1 = require('./pizza/ts/components/pizzalist.component');
var pizzadetail_component_1 = require('./pizza/ts/components/pizzadetail.component');
var cart_component_1 = require('./cart/ts/components/cart.component');
var checkout_component_1 = require('./checkout/ts/components/checkout.component');
var order_option_component_1 = require('./order-option/ts/components/order-option.component');
var login_component_1 = require('./login/ts/components/login.component');
// Servises
var pizzalist_service_1 = require('./pizza/ts/services/pizzalist.service');
var pizzadetail_service_1 = require('./pizza/ts/services/pizzadetail.service');
var checkout_service_1 = require('./checkout/ts/services/checkout.service');
var auth_service_1 = require('./login/ts/services/auth.service');
// ModelImpl
var cart_model_1 = require('./cart/ts/models/cart.model');
var account_model_1 = require('./login/ts/models/account.model');
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
                primeng_1.GrowlModule
            ],
            declarations: [
                app_component_1.AppComponent,
                pizzalist_component_1.PizzaListComponent,
                pizzadetail_component_1.PizzaDetailComponent,
                cart_component_1.CartComponent,
                checkout_component_1.CheckoutComponent,
                order_option_component_1.OrderOptionComponent,
                login_component_1.LoginComponent
            ],
            providers: [
                pizzalist_service_1.PizzaListService,
                pizzadetail_service_1.PizzaDetailService,
                checkout_service_1.CheckoutService,
                auth_service_1.AuthService,
                cart_model_1.Cart,
                account_model_1.Account
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
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
//# sourceMappingURL=app.module.js.map