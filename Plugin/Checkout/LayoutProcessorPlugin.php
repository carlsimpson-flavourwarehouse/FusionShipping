<?php

namespace Vendor\Module\Plugin\Checkout;

use Magento\Checkout\Block\Checkout\LayoutProcessor;

class LayoutProcessorPlugin
{
    /**
     * @param LayoutProcessor $subject
     * @param array $jsLayout
     * @return array
     */
    public function afterProcess(
        LayoutProcessor $subject,
        array $jsLayout
    )
    {
        $validation['required-entry'] = false;
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']
        ['shippingAddress']['children']['custom-shipping-method-fields']['children']['input_custom_shipping_field'] = [
            'component' => "Magento_Ui/js/form/element/abstract",
            'config' => [
                'customScope' => 'customShippingMethodFields',
                'template' => 'ui/form/field',
                'elementTmpl' => "ui/form/element/hidden",
                'id' => "input_custom_shipping_field"
            ],
            'dataScope' => 'customShippingMethodFields.custom_shipping_field[input_custom_shipping_field]',
            'label' => "Your Custom Label", //you can add your custom text here
            'provider' => 'checkoutProvider',
            'visible' => true,
            'validation' => $validation,
            'sortOrder' => 2,
            'id' => 'custom_shipping_field[input_custom_shipping_field]'
        ];

        return $jsLayout;

    }
}