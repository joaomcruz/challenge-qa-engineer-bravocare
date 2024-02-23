class LoginPage_PO {
    fillFieldsToCreateAccount(name, email) {
        cy.get('[data-qa="signup-name"]').should('be.visible').should('be.empty').type(name)
        cy.get('[data-qa="signup-email"]').should('be.visible').should('be.empty').type(email)
    }

    clickOnSignUp() {
        cy.get('[data-qa="signup-button"]').should('be.visible').should('be.enabled').click()
    }

    login(email, password) {
        cy.get('[data-qa="login-email"]').should('be.visible').should('be.empty').type(email)
        cy.get('[data-qa="login-password"]').should('be.visible').should('be.empty').type(password)
        cy.get('[data-qa="login-button"]').click()
    }


}



export default LoginPage_PO;