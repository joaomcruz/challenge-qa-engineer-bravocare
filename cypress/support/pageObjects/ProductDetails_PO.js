import BasePage_PO from "./BasePage_PO";

class ProductDetails_PO extends BasePage_PO {

    constructor() {
        super();
    }

    pageElements = {
        getItemQuantityField: () => cy.get('#quantity'),
        getAddProductToCartButton: () => cy.get('.cart')
    }


    chooseItemQuantity(quantity) {
        this.pageElements.getItemQuantityField().should('be.visible').should('have.value', 1).invoke('attr', 'value', quantity).should('have.value', quantity)
    }

    addProductToCart() {
        this.pageElements.getAddProductToCartButton().should('be.visible').should('be.enabled').click()
    }


}


export default ProductDetails_PO;