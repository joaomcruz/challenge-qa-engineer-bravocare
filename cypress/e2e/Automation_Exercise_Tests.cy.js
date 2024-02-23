import AccountCreated_PO from "../support/pageObjects/AccountCreated_PO"
import CheckOut_PO from "../support/pageObjects/CheckOut_PO"
import ContactUS_PO from "../support/pageObjects/ContactUS_PO"
import HomePage_PO from "../support/pageObjects/Homepage_PO"
import LoginPage_PO from "../support/pageObjects/LoginPage_PO"
import PaymentDone_PO from "../support/pageObjects/PaymentDone_PO"
import Payment_PO from "../support/pageObjects/Payment_PO"
import ProductDetails_PO from "../support/pageObjects/ProductDetails_PO"
import SignUpPage_PO from "../support/pageObjects/SignUpPage_PO"

/// <reference types="cypress" />


describe('E2E - Automation Exercise e-commerce Testing', () => {
  const homePage_PO = new HomePage_PO()
  const productDetails_PO = new ProductDetails_PO()
  const loginPage_PO = new LoginPage_PO()
  const signUpPage_PO = new SignUpPage_PO()
  const accountCreated_PO = new AccountCreated_PO()
  const checkOut_PO = new CheckOut_PO()
  const payment_PO = new Payment_PO()
  const paymentDone_PO = new PaymentDone_PO()
  const contactUS_PO = new ContactUS_PO()

  beforeEach(() => {
    homePage_PO.visitHomePage()
  })


  it('E2E Testing - Buying a product and Contacting the Company', () => {
    cy.scrollPageHalfwayDown()

    homePage_PO.chooseRandomProductToView()

    productDetails_PO.chooseItemQuantity(5)

    productDetails_PO.addProductToCart()

    cy.viewCartModalClick()

    cy.clickCheckOutButton()

    cy.registerModalClick()

    loginPage_PO.fillFieldsToCreateAccount(Cypress.env("firstName"), Cypress.env("email"))

    loginPage_PO.clickOnSignUp()

    signUpPage_PO.fillAndSubmitRegistrationForm(
      Cypress.env("title"),
      Cypress.env("password"),
      Cypress.env("day"),
      Cypress.env("month"),
      Cypress.env("year"),
      Cypress.env("firstName"),
      Cypress.env("lastName"),
      Cypress.env("company"),
      Cypress.env("address"),
      Cypress.env("country"),
      Cypress.env("state"),
      Cypress.env("city"),
      Cypress.env("zipcode"),
      Cypress.env("mobileNumber")
    )

    accountCreated_PO.continueAfterCreatingAccount()

    homePage_PO.clickCartOnTheHeader()

    cy.clickCheckOutButton()

    checkOut_PO.addCommentAndPlaceOrder(Cypress.env("comment"))

    payment_PO.fillCardInfoAndPayOrder(
      Cypress.env("nameOnCard"),
      Cypress.env("cardNumber"),
      Cypress.env("cvc"),
      Cypress.env("expiryCCMonth"),
      Cypress.env("expiryCCYear")
    )

    paymentDone_PO.continueSuccessfullMessage()

    homePage_PO.logout()

    loginPage_PO.login(Cypress.env("email"), Cypress.env("password"))

    homePage_PO.clickContactUsOnHeader()

    contactUS_PO.fillContactUsForm(
      Cypress.env("firstName"),
      Cypress.env("email"),
      Cypress.env("subject"),
      Cypress.env("messageContactUs")
    )

    contactUS_PO.acceptPopUp()

    homePage_PO.logout()

  })
})
