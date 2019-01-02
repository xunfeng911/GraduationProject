import { Time } from './Models/time';
import * as sourceMap from "source-map-support";
import * as Koa from 'koa';
import * as bodyParser from "koa-bodyparser";
import * as Json from 'koa-json';
import * as kcors from 'kcors';
import { createConnection } from 'typeorm';

import koaLog from './Middlewares/logs/log4';
import { RouteBuild } from './Middlewares/route/routeBuild';
import './Controllers/index';
import setHeader from "./Middlewares/set_header";
import ResFormatter from "./Middlewares/res_formatter";
import { Ticket } from "./Models/ticket";
import { User } from "./Models/user";

sourceMap.install();
const app = new Koa();
const routeBuild = new RouteBuild();
app.proxy = true;

createConnection({
  type: 'mysql',
  host: '123.207.98.46',
  port: 3306,
  username: 'root',
  password: 'love911',
  database: 'TicketTable',
  entities: [Ticket, User, Time],
  synchronize: true,
}).then(() => {
  bootstrap();
}).catch(error => console.log(error));

const bootstrap = async () => {
  app.use(bodyParser());
  app.use(Json());
  app.use(kcors());
  app.use(koaLog());
  app.use(setHeader);
  app.use(ResFormatter);
  app.use(routeBuild.routes());
  app.use(routeBuild.allowedMethods());
  app.listen(2827);
};