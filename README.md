# Add qty buttons to PDP
- Add qty increment buttons to product page utilising Magento UI components. 
- On the product detail page by the qty input dialog display a plus and a minus button which will increment/decrement the qty field

# Installation
clone this repo under `app/code/`

Then run the following comands: 

`php bin/magento setup:upgrade` 

`php bin/magento setup:static-content:deploy`

`php bin/magento cache:flush` 
