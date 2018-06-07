import * as React from "react";
import { Develop } from "./Services";

export class ServicesPage extends React.Component {

    public render() {
        return (
            <section className="section section-services">
                <div className="align-container">
                    <div className="section-main">
                        <Develop />
                    </div>
                    <div className="section-aside"></div>
                </div>
            </section>
        );
    }
}