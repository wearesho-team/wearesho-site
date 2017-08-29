// tslint:disable-next-line
/// <reference path="./steps.d.ts" />

Feature("Switch control");

Scenario("Arrows control", async (I) => {
    I.amOnPage("/");
    I.waitForElement(".section-main", 30);

    I.pressKey("ArrowDown");
    I.waitForElement(".section-partnership", 2);

    I.pressKey("ArrowUp");
    I.waitForElement(".section-main", 2);
});
