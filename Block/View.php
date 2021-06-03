<?php
namespace Flavour\FusionShipping\Block;

class View extends \Magento\Framework\View\Element\Template
{
    /**
     * @var \Flavour\FusionShipping\Helper\Data
     */
    protected $_dataHelper;

    /**
     * @param \Magento\Framework\View\Element\Template\Context $context
     * @param \Flavour\FusionShipping\Helper\Data $dataHelper
     * @param array $data
     */
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Flavour\FusionShipping\Helper\Data $dataHelper,
        array $data = []
    ) {
        $this->_dataHelper = $dataHelper;
        parent::__construct($context, $data);
    }

    public function canShowBlock()
    {
        $writer = new \Zend\Log\Writer\Stream(BP . '/var/log/logger.log');
        $logger = new \Zend\Log\Logger();
        $logger->addWriter($writer);
        $logger->info("Is my module enabled? " . $this->_dataHelper->isModuleEnabled());

        return $this->_dataHelper->isModuleEnabled();
    }
}