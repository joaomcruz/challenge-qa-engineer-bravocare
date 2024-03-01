import BasePage_PO from "./BasePage_PO";

class CheckOut_PO extends BasePage_PO {

    constructor() {
        super();
    }


    pageElements = {
        getCommentField: () => cy.get('textarea'),
    }



    addComment(message) {
        this.pageElements.getCommentField().should('be.empty').type(message).should('have.value', message)
    }


}


export default CheckOut_PO;