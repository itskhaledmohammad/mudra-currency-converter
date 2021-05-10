"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const DEFAULT_PORT = 7874;
app_1.default.set('port', process.env.PORT || DEFAULT_PORT);
app_1.default.listen(app_1.default.get('port'), () => {
    console.log(`Express running ➡️ PORT ${app_1.default.get('port')}`);
});
//# sourceMappingURL=index.js.map