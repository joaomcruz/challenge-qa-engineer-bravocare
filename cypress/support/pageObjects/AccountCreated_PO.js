class AccountCreated_PO {


    continueAfterCreatingAccount() {
        cy.get('[data-qa="continue-button"]').should('be.visible').click()
    }

}

export default AccountCreated_PO;