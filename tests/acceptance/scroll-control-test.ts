// tslint:disable-next-line
/// <reference path="./steps.d.ts" />

Feature("Scroll control");

Scenario("Scrolling", async (I) => {
    const timeout = 30;
    const size = {
        w: 1300,
        h: 800
    };

    I.amOnPage("/");

    I.resizeWindow(size.w, size.h);
    I.waitForElement("body.loaded", timeout);

    const count = 17;

    for (let i = 0; i < count; i++) {
        I.pressKey("ArrowDown");
    }

    I.wait(1);
    I.seeInCurrentUrl("/contact");

    for (let i = 0; i < count; i++) {
        I.pressKey("ArrowUp");
    }

    I.wait(1);
    I.seeInCurrentUrl("/");
});
