class BasePage_PO {


    pageElements = {
        getContinueShoppingButton: () => cy.get('.modal-footer > .btn'),
        getViewCartModalButton: () => cy.get('a[href="/view_cart"] > u'),
        getRegisterModalButton: () => cy.get('a[href="/login"] > u'),
        getCheckOutButton: () => cy.get('.check_out'),
        getCartButtonOnTheHeader: () => cy.get(".shop-menu > .nav > li > a[href='/view_cart']"),
        getContactUsButtonOnTheHeader: () => cy.get(".shop-menu > .nav > li > a[href='/contact_us']"),
        getLogoutButton: () => cy.get(".shop-menu > .nav > li > a[href='/logout']"),
        getContinueButton: () => cy.get('[data-qa="continue-button"]')
    }



    clickViewCartModal = () => this.pageElements.getViewCartModalButton().should('be.visible').click()

    acceptPopUp() {
        cy.on('window:confirm', (txt) => {
            expect(txt).to.be.visible
            expect(txt).to.have.text("Press OK to proceed!");
        })
    }


    scrollPageHalfwayDown() {
        cy.scrollTo('center')
    }


    clickContinueShopping() {
        this.pageElements.getContinueShoppingButton().should('be.visible').click()
    }


    clickRegisterModal() {
        this.pageElements.getRegisterModalButton().should('be.visible').click()
    }


    clickProceedToCheckOutButton() {
        this.pageElements.getCheckOutButton().should('be.visible').click()
    }


    clickCartOnTheHeader() {
        this.pageElements.getCartButtonOnTheHeader().should('be.visible').click()
    }

    clickContactUsOnHeader() {
        this.pageElements.getContactUsButtonOnTheHeader().should('be.visible').click()
    }


    logout() {
        this.pageElements.getLogoutButton().should('be.visible').click()
    }


    continueAction() {
        this.pageElements.getContinueButton().should('be.visible').click()
    }

}


export default BasePage_PO;