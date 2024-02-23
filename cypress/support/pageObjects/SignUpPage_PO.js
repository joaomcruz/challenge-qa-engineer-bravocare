
class SignUpPage_PO {
    fillAndSubmitRegistrationForm(title, password, day, month, year, firstName, lastName, company, address, country, state, city, zipcode, mobileNumber) {
        title === "Mr" ? cy.get("#id_gender1").should('be.visible').should('not.be.checked').check().should('have.value', "Mr") : cy.get("id_gender2").should('be.visible').should('not.be.checked').check().should('have.value', "Mrs")
        cy.get('[data-qa="name"]').should('be.visible').should('have.value', Cypress.env("firstName"))
        cy.get('[data-qa="email"]').should('be.visible').should('have.value', Cypress.env("email"))
        cy.get('[data-qa="password"]').should('be.visible').should('be.empty').type(password).should('have.value', password)
        cy.get('[data-qa="days"]').should('be.visible').should('be.visible').select(day).should('have.value', day)
        cy.get('[data-qa="months"]').should('be.visible').should('be.visible', "Month").select(month).should('have.value', month)
        cy.get('[data-qa="years"]').should('be.visible').should('be.visible', "Year").select(year).should('have.value', year)
        cy.get('[data-qa="first_name"]').should('be.visible').should('be.empty').type(firstName).should('have.value', firstName)
        cy.get('[data-qa="last_name"]').should('be.visible').should('be.empty').type(lastName).should('have.value', lastName)
        cy.get('[data-qa="company"]').should('be.visible').should('be.empty').type(company).should('have.value', company)
        cy.get('[data-qa="address"]').should('be.visible').should('be.empty').type(address).should('have.value', address)
        cy.get('[data-qa="country"]').should('be.visible').should('have.value', "India").select(country).should('have.value', country)
        cy.get('[data-qa="state"]').should('be.visible').should('be.empty').type(state).should('have.value', state)
        cy.get('[data-qa="city"]').should('be.visible').should('be.empty').type(city).should('have.value', city)
        cy.get('[data-qa="zipcode"]').should('be.visible').should('be.empty').type(zipcode).should('have.value', zipcode)
        cy.get('[data-qa="mobile_number"]').should('be.visible').should('be.empty').type(mobileNumber).should('have.value', mobileNumber)
        cy.get('[data-qa="create-account"]').should('be.visible').should('be.enabled').click()
    }
}




export default SignUpPage_PO;