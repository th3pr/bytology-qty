var config = {
    map: {
        '*': {
            // This code helps us to override the knockout HTML template file.
            'Magento_Checkout/template/minicart/item/default.html': 'Bytology_Qty/template/minicart/item/default.html',
            // The bellow codes help us to override the JS files
            'sidebar': 'Bytology_Qty/js/sidebar',
            'Magento_Checkout/js/view/minicart': 'Bytology_Qty/js/view/minicart'
        }
    }
};
