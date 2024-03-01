import BasePage_PO from "./BasePage_PO";

class LoginPage_PO extends BasePage_PO {

    constructor() {
        super();
    }

    pageElements = {
        getSignUpNameField: () => cy.get('[data-qa="signup-name"]'),
        getSignUpEmailField: () => cy.get('[data-qa="signup-email"]'),
        getSignUpSubmitButton: () => cy.get('[data-qa="signup-button"]'),
        getLoginEmailField: () => cy.get('[data-qa="login-email"]'),
        getLoginPasswordField: () => cy.get('[data-qa="login-password"]'),
        getLoginAccessButton: () => cy.get('[data-qa="login-button"]')

    }

    fillFieldsToCreateAccount(name, email) {
        this.pageElements.getSignUpNameField().should('be.visible').should('be.empty').type(name)
        this.pageElements.getSignUpEmailField().should('be.visible').should('be.empty').type(email)
    }

    clickOnSignUp() {
        this.pageElements.getSignUpSubmitButton().should('be.visible').should('be.enabled').click()
    }

    login(email, password) {
        this.pageElements.getLoginEmailField().should('be.visible').should('be.empty').type(email)
        this.pageElements.getLoginPasswordField().should('be.visible').should('be.empty').type(password, { log: false })
        this.pageElements.getLoginAccessButton().should('be.visible').click()
    }


}



export default LoginPage_PO;