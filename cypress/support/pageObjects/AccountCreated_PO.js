import BasePage_PO from "./BasePage_PO";

class AccountCreated_PO extends BasePage_PO {

    constructor() {
        super();
    }

    continueAfterCreatingAccount() {
        this.continueAction()
    }

}

export default AccountCreated_PO;