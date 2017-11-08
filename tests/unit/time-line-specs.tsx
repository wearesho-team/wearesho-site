import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {useFakeTimers, SinonFakeTimers} from "sinon";

import {TimeLine, TimeLineState, TimeLineProps} from "../../src/components/TimeLine";
import {YearItem} from "../../src/components/TimeLine/YearItem";
import {projects} from "../../src/data/Projects";

// tslint:disable:no-magic-numbers
describe("<TimeLine/>", () => {
    let wrapper: ReactWrapper<TimeLineProps, TimeLineState>;
    let timer: SinonFakeTimers;
    const animationDuration = 300;

    const delay = ((window as any).hideTimeout || 2000) * 9;

    const halfOfMonth = Math.round(projects[projects.length - 1].date.month / 2);

    let props = {
        range: {
            max: projects[projects.length - 1].date.year,
            min: projects[0].date.year
        }
    };

    beforeEach(() => {
        wrapper = mount(<TimeLine {...props}/>);

        timer = useFakeTimers();
    });

    afterEach(() => {
        props = {
            range: {
                max: projects[projects.length - 1].date.year,
                min: projects[0].date.year
            }
        };
        timer.restore();
        wrapper.unmount();
    });

    it("should set first project on mount after delay", () => {
        TimeLine.demonstrationMode = true;
        document.body.className = "";
        wrapper.unmount();
        wrapper.mount();
        timer.tick(TimeLine.startDelay / 2);
        expect(wrapper.state().activeProject.date.year).to.equal(projects[0].date.year);
        expect(wrapper.state().activeProject.date.month).to.equal(projects[0].date.month);

        timer.tick(TimeLine.startDelay / 2);

        expect(wrapper.state().activeProject.date.year).to.equal(projects[1].date.year);
        expect(wrapper.state().activeProject.date.month).to.equal(projects[1].date.month);
        TimeLine.demonstrationMode = false;

        document.body.className = "loaded";
    });

    it("should render number of <YearItem/>'s corresponding to `range` prop", () => {
        expect(wrapper.find(YearItem).length).to.equal(props.range.max - props.range.min + 1);
    });

    it("should render <Slider/> only if `state.sliderPosition` not equals zero", () => {
        wrapper.setState({
            sliderPosition: 1
        });

        expect(
            Array.from(wrapper.getDOMNode().children).find(({className}) => !className.search("slider"))
        ).to.exist;
    });

    it("should set `move` class name to `<Slider/>` when active project changed", () => {
        timer.restore();

        Object.defineProperty(wrapper.getDOMNode().parentNode, "parentNode", {
            get: () => {
                return {
                    getBoundingClientRect: () => {
                        return {
                            width: 100
                        }
                    }
                }
            }
        });

        (wrapper.instance() as any)
            .handleChangeProject(wrapper.getDOMNode(), halfOfMonth, projects[projects.length - 1].date.year);

        expect(wrapper.state().sliderClassName).to.contain(TimeLine.sliderMoveClassName);
    });

    it("should return if active project dos not exist in list", () => {
        props = {
            range: {
                max: projects[0].date.year - 1,
                min: projects[0].date.year - 2
            }
        };

        wrapper = mount(<TimeLine {...props}/>);

        expect((wrapper.instance() as any)
            .handleChangeProject(wrapper.getDOMNode(), 0, 2021)).to.not.exist;

        expect(wrapper.state().sliderClassName).to.not.contain(TimeLine.sliderMoveClassName);
    });

    it("should remove `move` class name from `<Slider/>` after animation delay when active project changed", () => {
        wrapper = mount(<TimeLine {...props}/>);

        Object.defineProperty(wrapper.getDOMNode().parentNode, "parentNode", {
            get: () => {
                return {
                    getBoundingClientRect: () => {
                        return {
                            width: 100
                        }
                    }
                }
            }
        });

        (wrapper.instance() as any)
            .handleChangeProject(wrapper.getDOMNode(), halfOfMonth, projects[projects.length - 1].date.year);

        timer.tick(animationDuration / 2);
        expect(wrapper.state().sliderClassName).to.contain(TimeLine.sliderMoveClassName);
        timer.tick(animationDuration / 2);
        expect(wrapper.state().sliderClassName).to.not.contain(TimeLine.sliderMoveClassName);
    });

    it("Should set `swap` class name when slider near with right edge of screen", () => {
        Object.defineProperty(wrapper.getDOMNode().parentNode, "parentNode", {
            get: () => {
                return {
                    getBoundingClientRect: () => {
                        return {
                            width: 100
                        }
                    }
                }
            }
        });

        Object.defineProperty(wrapper.getDOMNode(), "offsetLeft", {
            get: () => 5000
        });

        (wrapper.instance() as any)
            .handleChangeProject(wrapper.getDOMNode(), halfOfMonth, projects[projects.length - 1].date.year);

        timer.tick(animationDuration);
        expect(wrapper.state().sliderClassName).to.contain("swap");
    })
});
