import BasePage_PO from "./BasePage_PO";
class SignUpPage_PO extends BasePage_PO {

    constructor() {
        super();
    }

    pageElements = {
        getEmailFieldFromRegistrationForm: () => cy.get('[data-qa="email"]'),
        getPasswordFieldFromRegistrationForm: () => cy.get('[data-qa="password"]'),
        getDayOfBirthFieldFromRegistrationForm: () => cy.get('[data-qa="days"]'),
        getMonthOfBirthFieldFromRegistrationForm: () => cy.get('[data-qa="months"]'),
        getYearOfBirthFieldFromRegistrationForm: () => cy.get('[data-qa="years"]'),
        getFirstNameFieldFromRegistrationForm: () => cy.get('[data-qa="first_name"]'),
        getLastNameFieldFromRegistrationForm: () => cy.get('[data-qa="last_name"]'),
        getCompanyFieldFromRegistrationForm: () => cy.get('[data-qa="company"]'),
        getAddressFieldFromRegistrationForm: () => cy.get('[data-qa="address"]'),
        getCountryFieldFromRegistrationForm: () => cy.get('[data-qa="country"]'),
        getStateFieldFromRegistrationForm: () => cy.get('[data-qa="state"]'),
        getCityFieldFromRegistrationForm: () => cy.get('[data-qa="city"]'),
        getZipCodeFieldFromRegistrationForm: () => cy.get('[data-qa="zipcode"]'),
        getMobileNumberFieldFromRegistrationForm: () => cy.get('[data-qa="mobile_number"]'),
        getCreateAccountButtonFromRegistrationForm: () => cy.get('[data-qa="create-account"]'),
        getGenderFromRegistrationForm: (gender) =>
            gender == "Mr" ? cy.get("#uniform-id_gender1").should('be.visible').should('not.be.checked').check().should('be.checked') : cy.get("#uniform-id_gender2").should('be.visible').should('not.be.checked').click()
    }


    fillAndSubmitRegistrationForm(title, password, day, month, year, firstName, lastName, company, address, country, state, city, zipcode, mobileNumber, email) {
        this.pageElements.getGenderFromRegistrationForm(title)
        this.pageElements.getEmailFieldFromRegistrationForm().should('be.visible').should('have.value', email);
        this.pageElements.getPasswordFieldFromRegistrationForm().should('be.visible').should('be.empty').type(password).should('have.value', password);
        this.pageElements.getDayOfBirthFieldFromRegistrationForm().should('be.visible').should('be.visible', "Day").select(day).should('have.value', day)
        this.pageElements.getMonthOfBirthFieldFromRegistrationForm().should('be.visible').should('be.visible', "Month").select(month).should('have.value', month)
        this.pageElements.getYearOfBirthFieldFromRegistrationForm().should('be.visible').should('be.visible', "Year").select(year).should('have.value', year)
        this.pageElements.getFirstNameFieldFromRegistrationForm().should('be.visible').should('be.empty').type(firstName).should('have.value', firstName)
        this.pageElements.getLastNameFieldFromRegistrationForm().should('be.visible').should('be.empty').type(lastName).should('have.value', lastName)
        this.pageElements.getCompanyFieldFromRegistrationForm().should('be.visible').should('be.empty').type(company).should('have.value', company)
        this.pageElements.getAddressFieldFromRegistrationForm().should('be.visible').should('be.empty').type(address).should('have.value', address)
        this.pageElements.getCountryFieldFromRegistrationForm().should('be.visible').should('have.value', "India").select(country).should('have.value', country)
        this.pageElements.getStateFieldFromRegistrationForm().should('be.visible').should('be.empty').type(state).should('have.value', state)
        this.pageElements.getCityFieldFromRegistrationForm().should('be.visible').should('be.empty').type(city).should('have.value', city)
        this.pageElements.getZipCodeFieldFromRegistrationForm().should('be.visible').should('be.empty').type(zipcode).should('have.value', zipcode)
        this.pageElements.getMobileNumberFieldFromRegistrationForm().should('be.visible').should('be.empty').type(mobileNumber).should('have.value', mobileNumber)
        this.pageElements.getCreateAccountButtonFromRegistrationForm().should('be.visible').should('be.enabled').click()
    }

}




export default SignUpPage_PO;