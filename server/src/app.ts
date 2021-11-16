import * as express from 'express';
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { router } from './routes';

import { mysql } from "../config.json";

import { MysqlDriver } from "./lib/mysql";

const APP = express();

APP.set("mysqlDb", new MysqlDriver(mysql));

// Add CORS headers
APP.use(cors({origin:true, credentials: true}));

// body-parser
APP.use(bodyParser.urlencoded({extended: true}));

// add all routes to APP
APP.use(router);

export {
	APP
};
