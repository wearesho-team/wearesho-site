// tslint:disable-next-line
/// <reference path="./steps.d.ts" />

Feature("Smart breakpoint");

// default 1600x1000
Scenario("Window resizing", async (I) => {
    const timeout = 30;
    I.amOnPage("/");

    let size = {
        w: 1200,
        h: 1000
    };

    I.waitForElement(".translate-container", timeout);
    I.seeElementInDOM(".translate-container");
    I.dontSeeElementInDOM(".scroll-container");

    I.resizeWindow(size.w, size.h);

    I.waitForElement(".scroll-container", timeout);
    I.seeElementInDOM(".scroll-container");
    I.dontSeeElementInDOM(".translate-container");

    size = {
        w: 1600,
        h: 1000
    };

    I.resizeWindow(size.w, size.h);

    I.waitForElement(".translate-container", timeout);
    I.seeElementInDOM(".translate-container");
    I.dontSeeElementInDOM(".scroll-container");
});
