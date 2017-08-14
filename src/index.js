import '../styles/main.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Layout from './components/Layout/Layout';
import PreLoader from './components/PreLoader';
const container = document.getElementById('content-overlay');
const preLoaderElement = document.getElementById('pre-loader');
if (!container) {
    console.error("Can not found element for mounting Layout!");
}
else {
    ReactDOM.render(React.createElement(Layout, { preLoader: new PreLoader(preLoaderElement) }), container);
}
//# sourceMappingURL=index.js.map