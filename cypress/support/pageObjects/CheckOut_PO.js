class CheckOut_PO {

    addCommentAndPlaceOrder(message) {
        cy.get('textarea').should('be.empty').type(message).should('have.value', message)
        cy.clickCheckOutButton()
    }


}


export default CheckOut_PO;