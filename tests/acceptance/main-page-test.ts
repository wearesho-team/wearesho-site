// tslint:disable-next-line
/// <reference path="./steps.d.ts" />

Feature("Main Page");

Scenario("Main Page opening", async (I) => {
    const timeout = 30;

    I.amOnPage("/");
    I.waitForElement(".section-main", timeout);
});
