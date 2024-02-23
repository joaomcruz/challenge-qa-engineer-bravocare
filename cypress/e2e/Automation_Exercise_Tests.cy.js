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
    // 1 - Enter the website and scroll down about halfway down the page
    cy.scrollPageHalfwayDown()

    // 2 - Choose a product and click on “View product” under the picture of the product
    homePage_PO.chooseRandomProductToView()

    //3 - In the Quantity box enter 5
    productDetails_PO.chooseItemQuantity(5)

    //4 - Click “Add to cart”
    productDetails_PO.addProductToCart()

    //5 - Click “View Cart”
    cy.viewCartModalClick()

    //6 - Click on “Proceed to Checkout”
    cy.clickCheckOutButton()

    //7 - Click on “Register / Login”
    cy.registerModalClick()

    //8 - Enter name and email under “New User Signup!”

    loginPage_PO.fillFieldsToCreateAccount(Cypress.env("firstName"), Cypress.env("email"))

    //9 - Click on “Signup”

    loginPage_PO.clickOnSignUp()

    //10 - Fill in all information and click on “Create Account”

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

    //11 - Click on “Continue” under “ACCOUNT CREATED!” title

    accountCreated_PO.continueAfterCreatingAccount()


    //12 - Click on the Cart in the header

    homePage_PO.clickCartOnTheHeader()

    //13 - Click on “Proceed to checkout”

    cy.clickCheckOutButton()

    //14 - Add a comment and click on “Place Order”

    checkOut_PO.addCommentAndPlaceOrder(Cypress.env("comment"))

    //15 - Fill in fake Credit Card information and click on “Pay and Confirm Order”

    payment_PO.fillCardInfoAndPayOrder(
      Cypress.env("nameOnCard"),
      Cypress.env("cardNumber"),
      Cypress.env("cvc"),
      Cypress.env("expiryCCMonth"),
      Cypress.env("expiryCCYear")
    )



    //16 - Click on “Continue” button

    paymentDone_PO.continueSuccessfullMessage()

    //17 - Click on “Logout” on top header

    homePage_PO.logout()


    //18 - On the “Login to your account” box and enter with previously created user
    loginPage_PO.login(Cypress.env("email"), Cypress.env("password"))


    //19 - Click on “Contact us” on the header
    homePage_PO.clickContactUsOnHeader()


    //20 - fillContactUsForm()


    contactUS_PO.fillContactUsForm(
      Cypress.env("firstName"),
      Cypress.env("email"),
      Cypress.env("subject"),
      Cypress.env("messageContactUs")
    )

    //21 - Press “OK” in the pop up

    contactUS_PO.acceptPopUp()


    //22 - Finally, click on the “Logout” button on the header

    homePage_PO.logout()


  })


})
