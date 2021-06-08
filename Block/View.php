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

    /**
     * @param \Magento\Framework\View\Element\Template\Context $context
     * @param \Flavour\FusionShipping\Helper\Data $dataHelper
     * @param array $data
     */
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Flavour\FusionShipping\Helper\Data $dataHelper,
        Config $config,
        array $data = []
    ) {
        $this->_dataHelper = $dataHelper;
        $this->config = $config;
        parent::__construct($context, $data);
    }

    public function canShowBlock()
    {
        return $this->_dataHelper->isModuleEnabled();
    }

    public function getDpdCutOff()
    {
        //change the below to match what its called in the database
        return $this->config->getConfig('flavour_fusionshipping/dpd/cutofftime');
    }
}