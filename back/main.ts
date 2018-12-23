import * as sourceMap from "source-map-support";
import * as Koa from 'koa';
import * as bodyParser from "koa-bodyparser";
import * as Json from 'koa-json';
import * as kcors from 'kcors';
import koaLog from './logs/log4';
import { RouteBuild } from './route/routeBuild';
import './Controllers/index';
sourceMap.install();
const app = new Koa();
const routeBuild = new RouteBuild();
app.proxy = true;

app.use(async (ctx, next) => {
  console.time(`${ctx.method} ${ctx.url}`);
  await next();
  console.timeEnd(`${ctx.method} ${ctx.url}`);
  console.log(ctx.request.type);
 });
 app.use(bodyParser());
app.use(Json());
app.use(kcors());
app.use(koaLog());

app.use(routeBuild.routes());
app.use(routeBuild.allowedMethods());

app.listen(2828);