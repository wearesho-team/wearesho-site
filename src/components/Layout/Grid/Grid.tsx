import * as React from 'react';
import {GridDefaultProps, GridProps, GridPropTypes} from "./GridProps";

export class Grid extends React.Component<GridProps, undefined> {
    static defaultProps = GridDefaultProps;

    static propTypes = GridPropTypes;

    render() {
        let columns = Array(this.props.size)
            .fill(undefined)
            .map((x, i) => <li className="grid__col" key={i}/>);

        return (
            <ul className="grid">
                {columns}
            </ul>
        );
    }
}


