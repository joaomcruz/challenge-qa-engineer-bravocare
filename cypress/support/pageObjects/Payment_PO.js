import BasePage_PO from "./BasePage_PO";

class Payment_PO extends BasePage_PO {

    constructor() {
        super();
    }

    pageElements = {
        getCreditCardNameField: () => cy.get('[data-qa="name-on-card"]'),
        getCreditCardNumberField: () => cy.get('[data-qa="card-number"]'),
        getCreditCardCVCField: () => cy.get('[data-qa="cvc"]'),
        getCreditCardExpiryMonthField: () => cy.get('[data-qa="expiry-month"]'),
        getCreditCardExpiryYearField: () => cy.get('[data-qa="expiry-year"]'),
        getPayButton: () => cy.get('[data-qa="pay-button"]')
    }

    fillCardInfoAndPayOrder(name, cardNumber, cvc, expirationMM, expirationYYYY) {
        this.pageElements.getCreditCardNameField().should('be.empty').type(name).should('have.value', name)
        this.pageElements.getCreditCardNumberField().should('be.empty').type(cardNumber).should('have.value', cardNumber)
        this.pageElements.getCreditCardCVCField().should('be.empty').type(cvc).should('have.value', cvc)
        this.pageElements.getCreditCardExpiryMonthField().should('be.empty').type(expirationMM).should('have.value', expirationMM)
        this.pageElements.getCreditCardExpiryYearField().should('be.empty').type(expirationYYYY).should('have.value', expirationYYYY)
        this.pageElements.getPayButton().should('be.visible').should('be.enabled').click()
    }
}


export default Payment_PO;