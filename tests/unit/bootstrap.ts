import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

const placeholder = () => undefined;
require.extensions['.png'] = placeholder;
require.extensions['.jpg'] = placeholder;