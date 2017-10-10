// tslint:disable-next-line
/// <reference path="./steps.d.ts" />

Feature("Switch control");

Scenario("Arrows control", async (I) => {
    const timeout = 30;
    I.amOnPage("/");
    I.waitForElement(".section-main", timeout);

    I.pressKey("ArrowDown");
    I.waitForElement(".section-partnership", timeout);

    I.pressKey("ArrowUp");
    I.waitForElement(".section-main", timeout);
});
