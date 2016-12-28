"use strict";
var router_1 = require('@angular/router');
var pizza_routes_1 = require('./pizza/ts/routes/pizza.routes');
exports.routes = pizza_routes_1.PizzaRoutes.slice();
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=app.routes.js.map