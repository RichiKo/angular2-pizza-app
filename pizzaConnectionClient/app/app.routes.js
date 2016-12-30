"use strict";
var router_1 = require('@angular/router');
var pizza_routes_1 = require('./pizza/ts/routes/pizza.routes');
var cart_routes_1 = require('./cart/ts/routes/cart.routes');
var checkout_routes_1 = require('./checkout/ts/routes/checkout.routes');
var order_option_routes_1 = require('./order-option/ts/routes/order-option.routes');
exports.routes = pizza_routes_1.PizzaRoutes.concat(cart_routes_1.CartRoutes, checkout_routes_1.CheckoutRoutes, order_option_routes_1.OrderOptionRoutes);
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=app.routes.js.map