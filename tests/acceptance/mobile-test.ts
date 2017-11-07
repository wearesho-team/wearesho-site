// tslint:disable-next-line
/// <reference path="./steps.d.ts" />

Feature("Mobile Test");

Scenario("Form opening", async (I) => {
    const timeout = 30;

    let size = {
        w: 367,
        h: 700
    };

    I.resizeWindow(size.w, size.h);

    I.amOnPage("/");
    I.waitForElement(".section-main", timeout);
    I.wait(4);

    I.scrollPageToBottom();

    I.seeElementInDOM(".btn_transform");
    I.click(".btn_transform");
    I.wait(1);
    I.seeElement(".form-container");
});
