import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {useFakeTimers, SinonFakeTimers} from "sinon";

import {MonthItem, MonthItemProps} from "../../src/components/TimeLine/MonthItem";
import {ProjectInterface, projects} from "../../src/data/Projects";

describe("<MonthItem/>", () => {
    let wrapper: ReactWrapper<MonthItemProps, undefined>;
    let timer: SinonFakeTimers;
    const animationDuration = 300;
    let currentYear = 2017;
    let activeProjectPos = Math.round(projects[projects.length - 1].date.month / 2);

    const setNextProject = (project: ProjectInterface, position: number) => {

    };

    let props = {
        pos: activeProjectPos,
        projectsList: projects.filter(({date: {year}}) => Number(year) === currentYear),
        setNextProject: setNextProject
    };

    beforeEach(() => {
        wrapper = mount(
            <MonthItem {...props}/>
        );

        timer = useFakeTimers();
    });

    afterEach(() => {
        wrapper.unmount();
        timer.restore();
    });

    it("should set active if current month have latest project on mount", () => {
        expect((wrapper.getNode() as any).isActive).to.be.true;
    });

    it("should not set active if current month dont have latest project on mount", () => {
        wrapper.setProps({
            pos: 0
        });
        wrapper.mount();
        expect((wrapper.getNode() as any).isActive).to.not.exist;
    });
});
