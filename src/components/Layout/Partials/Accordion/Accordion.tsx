import * as React from "react";
import * as PropTypes from "prop-types";
import { TabsController, Header, Tab } from "react-expand";

export interface AccordionProps {
    list: Array<{
        header: string;
        body: JSX.Element;
    }>;
}

export const AccordionPropTypes: { [P in keyof AccordionProps]: PropTypes.Validator<any> } = {
    list: PropTypes.arrayOf(PropTypes.shape({
        header: PropTypes.string.isRequired,
        body: PropTypes.element.isRequired
    }).isRequired).isRequired
};

export class Accordion extends React.Component<AccordionProps> {
    public static readonly propTypes = AccordionPropTypes;

    public render(): React.ReactNode {
        return (
            <TabsController>
                <div className="accordion">
                    {this.items}
                </div>
            </TabsController>
        );
    }

    protected get items(): JSX.Element[] {
        return this.props.list.map(({ header, body }, i) => (
            <div className="accordion-item" key={header}>
                <Header expandId={header} className="accordion-header" >
                    <div className="slider">
                        <div className="slider__body">
                            <div className="slider__bar" />
                            <div className="slider__dot" />
                        </div>
                    </div>
                    <span className="accordion-title">
                        {header}
                    </span>
                </Header>
                <Tab expandId={header} className="accordion-body">
                    {body}
                </Tab>
            </div>
        ));
    }
}
