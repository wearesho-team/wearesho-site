import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {YearItem, YearItemProps, SideTypes} from "../../src/components/TimeLine/YearItem";
import {projects, DateInterface} from "../../src/data/Projects";
import {TimeLine} from "../../src/components/TimeLine";
import {ActivePoint} from "../../src/components/TimeLine/YearItem/ActivePoint";
import {EmptyPoint} from "../../src/components/TimeLine/YearItem/EmptyPoint";

describe("<YearItem/>", () => {
    let wrapper: ReactWrapper<YearItemProps, undefined>;
    let node: YearItem;
    let DOMNode: Element;

    let onChangeProjectHasCalled: boolean;
    const onChangeProject = (element: HTMLElement, position: number, year: number) => onChangeProjectHasCalled = true;

    const date: DateInterface = {
        year: projects[projects.length - 1].date.year,
        month: projects[projects.length - 1].date.month,
        day: 1,
    };

    let props: YearItemProps = {
        currentDate: date,
        onChangeProject,
        children: date.year,
    };

    beforeEach(() => {
        wrapper = mount(<YearItem {...props}/>);

        node = wrapper.getNode() as any;
        DOMNode = wrapper.getDOMNode();
    });

    afterEach(() => {
        onChangeProjectHasCalled = false;
        props.children = date.year;

        wrapper.unmount();
    });

    it("should find all projects for current component year", () => {
        (node as any).currentYearProjects.forEach(({date: {year}}) => {
            expect(year).to.equal(date.year);
        })
    });

    it("should render number of children corresponding to `TimeLine.pointsCount` + 1", () => {
        expect(DOMNode.children).to.have.length(TimeLine.pointsCount + 1);
    });

    it("should render year label at the middle of children", () => {
        expect(DOMNode.children[TimeLine.pointsCount / 2].className).to.contain(node.yearClassName);
    });

    it("should add `muted` class name to label for future years", () => {
        expect(DOMNode.getElementsByClassName(node.yearClassName)[0].className).to.not.contain(node.yearMutedClassName);

        props = {
            ...props,
            children: (new Date()).getFullYear() + 10
        };

        wrapper.setProps(props);

        expect(DOMNode.getElementsByClassName(node.yearClassName)[0].className).to.contain(node.yearMutedClassName);
    });

    it("should render `ActivePoint` if it date equals to one of item from `projects`", () => {
        expect(wrapper.find(ActivePoint).length).to.equal((node as any).currentYearProjects.length);
    });

    it("should render `ActivePoint` with `isActive` prop equals true if it equal to current active project", () => {
        expect(wrapper.find(ActivePoint).props().isActive).to.be.true;
    });

    it("should render `EmptyPoint` if it date not equals to one of item from `projects`", () => {
        props = {
            ...props,
            children: (new Date()).getFullYear() + 10
        };

        wrapper.setProps(props);

        expect(wrapper.find(EmptyPoint).length).to.equal(TimeLine.pointsCount - 1)
    });

    it("should set `SideType.left` child class name if it index on the left side to the middle of scale", () => {
        for (let i = 0; i < TimeLine.pointsCount / 2; i++) {
            expect(DOMNode.children[i].className).to.contain(SideTypes.left);
        }
    });

    it("should set `SideType.right` child class name if it index on the right side to the middle of scale", () => {
        for (let i = TimeLine.pointsCount / 2 + 1; i < TimeLine.pointsCount; i++) {
            expect(DOMNode.children[i].className).to.contain(SideTypes.right);
        }
    });

    it("should call `onChangeProject` if `ActivePoint` has been clicked", () => {
        props = {
            ...props,
            children: (new Date()).getFullYear() + 10
        };

        wrapper.setProps(props);

        (DOMNode.getElementsByClassName(ActivePoint.filledClassName)[0] as HTMLElement).click();

        expect(onChangeProjectHasCalled).to.be.true;
    });
});
