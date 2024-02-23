class ProductDetails_PO {


    chooseItemQuantity(quantity) {
        cy.get('#quantity').should('be.visible').should('have.value', 1).invoke('attr', 'value', quantity).should('have.value', quantity)
    }

    addProductToCart() {
        cy.get('.cart').should('be.visible').should('be.enabled').click()
    }


}







export default ProductDetails_PO;