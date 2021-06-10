<?php
namespace Flavour\FusionShipping\Block;
use Flavour\FusionShipping\Model\Config;

class View extends \Magento\Framework\View\Element\Template
{
    /**
     * @var \Flavour\FusionShipping\Helper\Data
     */
    protected $_dataHelper;
    
    /**
     * @var Config
     */
    private $config;
    protected $scopeConfig; 
    protected $shipconfig;

    /**
     * @param \Magento\Framework\View\Element\Template\Context $context
     * @param \Flavour\FusionShipping\Helper\Data $dataHelper
     * @param array $data
     */
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Flavour\FusionShipping\Helper\Data $dataHelper,
        Config $config,
        \Magento\Framework\App\Config\ScopeConfigInterface $scopeConfig,
        \Magento\Shipping\Model\Config $shipconfig,
        array $data = []
    ) {
        $this->_dataHelper = $dataHelper;
        $this->config = $config;
        $this->shipconfig = $shipconfig;
        $this->scopeConfig = $scopeConfig;
        parent::__construct($context, $data);
    }

    public function canShowBlock()
    {
        return $this->_dataHelper->isModuleEnabled();
    }

    public function EnableDPD()
    {
        return $this->config->getConfig('Flavour_FusionShipping/dpd/enable');
    }

    public function EnableRoyalMail()
    {
        return $this->config->getConfig('Flavour_FusionShipping/royalmail/enable');
    }

    public function getDpdCutOff()
    {
        return $this->config->getConfig('Flavour_FusionShipping/dpd/cutofftime');
    }

    public function getRoyalMailCutOff()
    {
        return $this->config->getConfig('Flavour_FusionShipping/royalmail/cutofftime');
    }

    public function getBankHolidayFrom()
    {
        return $this->config->getConfig('Flavour_FusionShipping/date/from_date');
    }

    public function getBankHolidayTo()
    {
        return $this->config->getConfig('Flavour_FusionShipping/date/to_date');
    }

    public function getShippingMethods() {
        $activeCarriers = $this->shipconfig->getActiveCarriers();
    
        foreach($activeCarriers as $carrierCode => $carrierModel) {
           $options = array();
    
           if ($carrierMethods = $carrierModel->getAllowedMethods()) {
               foreach ($carrierMethods as $methodCode => $method) {
                    $code = $carrierCode . '_' . $methodCode;
                    $options[] = array('value' => $code, 'label' => $method);
               }
               $carrierTitle = $this->scopeConfig
                   ->getValue('carriers/'.$carrierCode.'/title');
            }
    
            $methods[] = array('value' => $options, 'label' => $carrierTitle);
        }
    
        return $methods;    
    }
}