var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.props.preLoader.hide();
        });
    }
    componentWillUnmount() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.props.preLoader.show();
        });
    }
    render() {
        return React.createElement(Router, null,
            React.createElement(Switch, null,
                React.createElement(Route, { path: "/test1", render: () => React.createElement("div", null, "1") }),
                React.createElement(Route, { path: "/test2", render: () => React.createElement("div", null, "2") })));
    }
}
//# sourceMappingURL=Layout.js.map