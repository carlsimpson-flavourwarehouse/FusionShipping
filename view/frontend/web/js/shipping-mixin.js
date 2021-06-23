define([], function() {
    'use strict';
    return function (Component) {
        return Component.extend({
            defaults: {
                shippingMethodItemTemplate: 'Flavour_FusionShipping/shipping-address/shipping-method-item'
            },

        });
    };
});