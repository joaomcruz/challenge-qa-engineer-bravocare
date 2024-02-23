Cypress.Commands.add('scrollPageHalfwayDown', () => {
    cy.scrollTo('center')
})


Cypress.Commands.add('clickContinueShopping', () => {
    cy.get('.modal-footer > .btn').should('be.visible').click()
})


Cypress.Commands.add('viewCartModalClick', () => {
    cy.get('a[href="/view_cart"] > u').should('be.visible').click()
})


Cypress.Commands.add('registerModalClick', () => {
    cy.get('a[href="/login"] > u').should('be.visible').click()
})


Cypress.Commands.add('clickCheckOutButton', () => {

    cy.get(".check_out").should('be.visible').click()

})