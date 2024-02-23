

class HomePage_PO {


    visitHomePage() {
        cy.visit('/');
    }

    chooseRandomProductToView() {
        cy.get('.choose > .nav > li > a').as("viewProductButtonList")
            .should('be.visible')
            .its('length')
            .then(lengthOfArray => Cypress._.random(0, lengthOfArray - 1))
            .then((randomizedIndex) => {
                cy.get("@viewProductButtonList").eq(randomizedIndex).click()
            })
    }

    clickCartOnTheHeader() {
        cy.get(".shop-menu > .nav > li > a[href='/view_cart']").click()
    }


    logout() {
        cy.get(".shop-menu > .nav > li > a[href='/logout']").click()
    }


    clickContactUsOnHeader() {
        cy.get(".shop-menu > .nav > li > a[href='/contact_us']").click()
    }


}

export default HomePage_PO;