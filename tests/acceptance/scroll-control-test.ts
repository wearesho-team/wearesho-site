// tslint:disable-next-line
/// <reference path="./steps.d.ts" />

Feature("Scroll control");

Scenario("Scrolling", async (I) => {
    I.amOnPage("/");

    I.resizeWindow(1300, 800);
    I.waitForElement(".scroll-container", 30);

    for (let i = 0; i < 17; i++) {
        I.pressKey("ArrowDown");
    }

    I.wait(1);
    I.seeInCurrentUrl("/contact");

    for (let i = 0; i < 17; i++) {
        I.pressKey("ArrowUp");
    }

    I.wait(1);
    I.seeInCurrentUrl("/");
});
