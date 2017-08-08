import * as React from 'react';
import PreLoader from './PreLoader';

export interface LayoutProps {
    preLoader: PreLoader;
}

export default class Layout extends React.Component<LayoutProps, undefined> {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.props.preLoader.hide();
    }

    async componentWillUnmount() {
        await this.props.preLoader.show();
    }

    render() {
        return <span>Hello, World!</span>;
    }
}