"use strict";
var router_1 = require('@angular/router');
var home_routes_1 = require('./home/ts/routes/home.routes');
var pizza_routes_1 = require('./pizza/ts/routes/pizza.routes');
exports.routes = home_routes_1.HomeRoutes.concat(pizza_routes_1.PizzaRoutes);
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=app.routes.js.map