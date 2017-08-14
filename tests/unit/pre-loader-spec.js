var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import PreLoader from '../../src/components/PreLoader';
import { expect } from 'chai';
describe('PreLoader animations', () => {
    const element = document.createElement('div');
    element.setAttribute('id', 'pre-loader');
    const preLoader = new PreLoader(element);
    it('should add `loaded` class on hiding', () => __awaiter(this, void 0, void 0, function* () {
        yield preLoader.hide();
        expect(element.outerHTML).to.equal('<div id="pre-loader" class="loaded"></div>');
    }));
    it('should remove classes (`loaded`) on showing', () => __awaiter(this, void 0, void 0, function* () {
        expect(element.outerHTML).to.equal('<div id="pre-loader" class="loaded"></div>');
        yield preLoader.show();
        expect(element.outerHTML).to.equal('<div id="pre-loader"></div>');
    }));
});
//# sourceMappingURL=pre-loader-spec.js.map