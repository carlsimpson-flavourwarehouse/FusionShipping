define([
    'uiComponent'
], function() {
    'use strict';

    return function (
        Component
    ) {
        return Component.extend({
            defaults: {
                message : 'Flavour_FusionShipping Module has loaded',
                //template: 'Flavour_FusionShipping/shipping-address/shipping-method-item'
            },

            initialize : function() {
                this._super();

                console.log(this.message);
            }
        });
    };
});