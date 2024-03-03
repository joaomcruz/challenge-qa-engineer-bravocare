import {
  AccountCreated_PO,
  BasePage_PO, CheckOut_PO,
  ContactUS_PO, HomePage_PO,
  LoginPage_PO, PaymentDone_PO,
  Payment_PO, ProductDetails_PO,
  SignUpPage_PO
} from "..\support\pageObjects"
import { faker } from '@faker-js/faker'


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
  const basePage_PO = new BasePage_PO()



  beforeEach(() => {
    homePage_PO.visitHomePage()
  })


  it('E2E Testing - Buying a product and Contacting the Company', () => {
    const email = faker.internet.email()

    basePage_PO.scrollPageHalfwayDown()

    homePage_PO.chooseRandomProductToView()

    productDetails_PO.chooseItemQuantity(5)

    productDetails_PO.addProductToCart()

    basePage_PO.clickViewCartModal()

    basePage_PO.clickProceedToCheckOutButton()

    basePage_PO.clickRegisterModal()

    loginPage_PO.fillFieldsToCreateAccount(Cypress.env("firstName"), email)

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
      Cypress.env("mobileNumber"),
      email
    )

    accountCreated_PO.continueAfterCreatingAccount()

    basePage_PO.clickCartOnTheHeader()

    basePage_PO.clickProceedToCheckOutButton()

    checkOut_PO.addComment(Cypress.env("comment"))

    basePage_PO.clickProceedToCheckOutButton()

    payment_PO.fillCardInfoAndPayOrder(
      Cypress.env("nameOnCard"),
      Cypress.env("cardNumber"),
      Cypress.env("cvc"),
      Cypress.env("expiryCCMonth"),
      Cypress.env("expiryCCYear")
    )

    paymentDone_PO.continueSuccessfullMessage()

    basePage_PO.logout()

    loginPage_PO.login(email, Cypress.env("password"))

    basePage_PO.clickContactUsOnHeader()

    contactUS_PO.fillContactUsForm(
      Cypress.env("firstName"),
      email,
      Cypress.env("subject"),
      Cypress.env("messageContactUs")
    )

    basePage_PO.acceptPopUp()

    basePage_PO.logout()

  })
})
