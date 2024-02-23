class PaymentDone_PO {

    continueSuccessfullMessage() {
        cy.get('[data-qa="continue-button"]').should('be.visible').click()
    }



}


export default PaymentDone_PO