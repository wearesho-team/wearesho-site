// tslint:disable-next-line
/// <reference path="./steps.d.ts" />

Feature("Main Page");

Scenario("Main Page opening", async (I) => {

    I.amOnPage("/");
    I.waitForElement(".section-main", 10);
    I.seeElement(".section-main");
});
