class AccountCreated_PO {


    continueAfterCreatingAccount() {
        cy.get('[data-qa="continue-button"]').click()
    }

}

export default AccountCreated_PO;