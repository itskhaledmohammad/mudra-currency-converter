"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('module-alias/register');
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
// Dotenv.
require('dotenv').config({ path: '@config/.env' });
// Initializing our express app 🎉
const app = express_1.default();
// Some Security Headers. 👀
app.use(helmet_1.default());
// Enabling CORS for all routes. 🛩
app.use(cors_1.default());
// Logging 🖊️
app.use(morgan_1.default(':remote-addr - :remote-user [:date[clf]] :method :url HTTP/:http-version :status [content-length: :res[content-length]] - [referrer: :referrer] - [user-agent: :user-agent] - [response-time: :response-time ms] - [total-time: :total-time ms]'));
//  Parsing the body. 💪
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v1/');
// TODO: List Currencies /api/symbols
app;
// TODO: Convert Currency (params base and target)
// TODO: Error Handle 
// TODO: Write a caching layer.
// TODO: CRON
// TODO: Write tests for it.
app.get('/hello', (req, res) => {
    res.json({ "message": "We are live 👍" });
});
// Exporting our app 💯 
exports.default = app;
//# sourceMappingURL=app.js.map