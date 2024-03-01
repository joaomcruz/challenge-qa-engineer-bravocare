import BasePage_PO from "./BasePage_PO";

class HomePage_PO extends BasePage_PO {

    constructor() {
        super();
    }

    pageElements = {
        getViewProductButtonList: () => cy.get('.choose > .nav > li > a').as("viewProductButtonList")
    }


    visitHomePage() {
        cy.visit('/');
    }

    chooseRandomProductToView() {
        this.pageElements.getViewProductButtonList()
            .should('be.visible')
            .its('length')
            .then(lengthOfArray => Cypress._.random(0, lengthOfArray - 1))
            .then((randomizedIndex) => {
                cy.get("@viewProductButtonList").eq(randomizedIndex).click()
            })
    }

}

export default HomePage_PO;