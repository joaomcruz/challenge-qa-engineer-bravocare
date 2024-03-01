import BasePage_PO from "./BasePage_PO";

class ContactUS_PO extends BasePage_PO {

    constructor() {
        super();
    }

    pageElements = {
        getContactUsNameField: () => cy.get('[data-qa="name"]'),
        getContactUsEmailField: () => cy.get('[data-qa="email"]'),
        getContactUsSubjectField: () => cy.get('[data-qa="subject"]'),
        getContactUsMessageField: () => cy.get('[data-qa="message"]'),
    }



    fillContactUsForm(name, email, subject, message) {
        this.pageElements.getContactUsNameField().should('be.visible').should('be.empty').type(name)
        this.pageElements.getContactUsEmailField().should('be.visible').should('be.empty').type(email)
        this.pageElements.getContactUsSubjectField().should('be.visible').should('be.empty').type(subject)
        this.pageElements.getContactUsMessageField().should('be.visible').should('be.empty').type(message)
    }



}


export default ContactUS_PO;