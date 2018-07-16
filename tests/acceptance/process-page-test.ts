// tslint:disable-next-line
/// <reference path="./steps.d.ts" />

Feature("Process page");

Scenario("Process page routing", async (I) => {
    const timeout = 30;

    const development = ".scroll-container > .section-process .half_second button:nth-child(3)";

    I.amOnPage("/process");
    I.waitForElement(development, timeout);

    I.wait(timeout / 3);

    I.seeElementInDOM(".develop");
});
