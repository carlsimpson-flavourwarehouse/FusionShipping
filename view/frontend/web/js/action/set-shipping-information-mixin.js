define([
    'jquery',
    'mage/utils/wrapper',
    'Magento_Checkout/js/model/quote'
], function ($, wrapper, quote) {
    'use strict';

    return function (setShippingInformationAction) {

        return wrapper.wrap(setShippingInformationAction, function (originalAction) {
            /**
             * Chance to modify shipping addres data
             */
            var shippingAddressData = quote.shippingAddress();

            /**
             * Log before the original function
             */
            console.log("Before");
            console.log(shippingAddressData);

            var result = originalAction();

            /**
             * Log after the original function
             */
            console.log("After");
            console.log(shippingAddressData);

            return result;
        });
    };
});

