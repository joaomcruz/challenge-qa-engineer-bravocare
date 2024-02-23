class Payment_PO {

    fillCardInfoAndPayOrder(name, cardNumber, cvc, expirationMM, expirationYYYY) {
        cy.get('[data-qa="name-on-card"]').should('be.empty').type(name).should('have.value', name)
        cy.get('[data-qa="card-number"]').should('be.empty').type(cardNumber).should('have.value', cardNumber)
        cy.get('[data-qa="cvc"]').should('be.empty').type(cvc).should('have.value', cvc)
        cy.get('[data-qa="expiry-month"]').should('be.empty').type(expirationMM).should('have.value', expirationMM)
        cy.get('[data-qa="expiry-year"]').should('be.empty').type(expirationYYYY).should('have.value', expirationYYYY)
        cy.get('[data-qa="pay-button"]').should('be.visible').should('be.enabled').click()
    }
}


export default Payment_PO;