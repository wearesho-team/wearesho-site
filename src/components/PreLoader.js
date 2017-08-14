var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import sleep from '../helpers/sleep';
export default class PreLoader {
    constructor(element) {
        this.loader = element;
    }
    hide() {
        return __awaiter(this, void 0, void 0, function* () {
            yield sleep(500);
            this.loader.setAttribute('class', 'loaded');
            return this;
        });
    }
    show() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loader.removeAttribute('class');
            return this;
        });
    }
}
//# sourceMappingURL=PreLoader.js.map