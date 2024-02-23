class ContactUS_PO {


    fillContactUsForm(name, email, subject, message) {
        cy.get('[data-qa="name"]').should('be.visible').should('be.empty').type(name)
        cy.get('[data-qa="email"]').should('be.visible').should('be.empty').type(email)
        cy.get('[data-qa="subject"]').should('be.visible').should('be.empty').type(subject)
        cy.get('[data-qa="message"]').should('be.visible').should('be.empty').type(message)
    }

    acceptPopUp() {
        cy.on('window:confirm', (txt) => {
            expect(txt).to.contains("Press OK to proceed!");
        })

    }
}


export default ContactUS_PO;