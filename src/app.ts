require('module-alias/register')
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

// Initializing our express app 🎉
const app: express.Application = express();

// Some Security Headers. 👀
app.use(helmet());

// Enabling CORS for all routes. 🛩
app.use(cors());

// Logging 🖊️
app.use(morgan(':remote-addr - :remote-user [:date[clf]] :method :url HTTP/:http-version :status [content-length: :res[content-length]] - [referrer: :referrer] - [user-agent: :user-agent] - [response-time: :response-time ms] - [total-time: :total-time ms]'));

//  Parsing the body. 💪
app.use(express.json())
app.use(express.urlencoded());

// Exporting our app 💯 
export default app;