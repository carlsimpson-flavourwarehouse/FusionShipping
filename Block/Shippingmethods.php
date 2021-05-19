<?php
namespace Flavour\FusionShipping\Block;

use Magento\Framework\App\Config\ScopeConfigInterface;
use Magento\Shipping\Model\Config;

class Shippingmethods extends \Magento\Framework\View\Element\Template
{
    protected $scopeConfig;
    protected $shippingmodelconfig;

    public function __construct(Config $shippingmodelconfig, ScopeConfigInterface $scopeConfig){
        $this->shippingmodelconfig = $shippingmodelconfig;
        $this->scopeConfig = $scopeConfig;
    }

    public function getActiveShippingMethod()
    {
        $shippings = $this->shippingmodelconfig->getActiveCarriers();
        $methods = array();
        foreach($shippings as $shippingCode => $shippingModel)
        {
            if($carrierMethods = $shippingModel->getAllowedMethods())
            {
                foreach ($carrierMethods as $methodCode => $method)
                {
                    $code = $shippingCode.'_'.$methodCode;
                    $carrierTitle = $this->scopeConfig->getValue('carriers/'. $shippingCode.'/title');
                    $methods[] = array('value'=>$code,'label'=>$carrierTitle);
                }
            }
        }
        return $methods;
    }
}
?>