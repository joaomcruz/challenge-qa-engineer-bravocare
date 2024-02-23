import HomePage_PO from "../support/pageObjects/Homepage_PO"

/// <reference types="cypress" />


describe('Buying a product on automationexercise.com', () => {
  const homePage_PO = new HomePage_PO()

  beforeEach(() => {
    homePage_PO.visitHomePage()
  })

  it('E2E Testing - Selecting and buying a product', () => {
    // 1 - Scroll Down About Halfway down the page
    // 2 - homePage_PO.chooseRandomProductToView()
    //3 - chooseItemQuantity(5)
    //4 - addProductToCart()
    //5 - viewCart()
    //6 - proceedToCheckout()
    //7 - goToRegisterUserPage()
    //8 - fillNewUser()
    //9 - clickToSignUp()
    //10 - fillAndSubmitSignUpForm  .type(Cypress.env(username)) (Cypress.env(password) ,  { log : false} )
    //11 - clickToContinueAfterCreatingUser()
    //12 - acessCart()
    //13 - proceedToCheckout()
    //14 - addCommentAndOrder()
    //15 - fillCardInfoAndPayOrder()
    //16 - continueAfterPayment()
    //17 - logout()
    //18 - loginToAccount()
    //19 - accessContactUsPage()
    //20 - fillContactUsForm()
    //21 - acceptPopUp()
    //22 - logout()

    cy.log("funcionou")


  })


})
