// tslint:disable-next-line
/// <reference path="./steps.d.ts" />

Feature("Switch control");

Scenario("Arrows control", async (I) => {
    const timeout = 30;
    I.amOnPage("/");
    I.waitForElement("body.loaded", timeout);
    I.wait(2);
    I.pressKey("ArrowDown");
    I.waitForElement(".section-bobra-cs", timeout);

    I.pressKey("ArrowUp");
    I.waitForElement(".section-main", timeout);
});
