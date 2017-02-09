"use strict";
var order_history_component_1 = require('../components/order-history.component');
var bouncer_component_1 = require('../../../login/ts/components/bouncer.component');
exports.OrderHistoryRoutes = [
    { path: 'orderhistory', component: order_history_component_1.OrderHistoryComponent, canActivate: [bouncer_component_1.Bouncer] }
];
//# sourceMappingURL=order-history.routes.js.map