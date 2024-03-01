import BasePage_PO from "./BasePage_PO";

class PaymentDone_PO extends BasePage_PO {

    constructor() {
        super();
    }

    continueSuccessfullMessage() {
        this.continueAction()
    }

}


export default PaymentDone_PO