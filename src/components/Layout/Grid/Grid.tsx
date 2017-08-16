import * as React from 'react';
import {GridDefaultProps, GridProps, GridPropTypes} from "./GridProps";

export const Grid = (props:GridProps = GridDefaultProps) => {

    let columns = Array(props.size)
        .fill(undefined)
        .map((x,i) => <li className="grid__col" key={i}/>);

    return (
        <ul className="grid">
            {columns}
        </ul>
    );
};

(Grid as any).propTypes = GridPropTypes;

