var config = {
    'config':{
        'mixins': {
            'Magento_Customer/js/view/customer': {
                'Flavour_FusionShipping/js/hook':true
            },
            'Magento_Checkout/js/action/set-shipping-information': {
                'Flavour_FusionShipping/js/action/set-shipping-information-mixin': true
            },
            "Magento_Checkout/js/view/shipping": {
                "Flavour_FusionShipping/js/shipping-mixin": true
            }
        }
    }

};