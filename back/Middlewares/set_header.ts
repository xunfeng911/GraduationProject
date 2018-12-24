import { Context } from 'koa';
export default async function setHeader (ctx: Context, next: any) {
  if (ctx.request.method == "OPTIONS") {
    ctx.response.status = 200
  }
  ctx.set("Access-Control-Allow-Origin", ctx.request.header.origin)
  ctx.set("Access-Control-Allow-Credentials", 'true')
  ctx.set("Access-Control-Max-Age", '86400000')
  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE")
  ctx.set("Access-Control-Allow-Headers", "application/x-www-form-urlencoded, x-www-form-urlencoded, x-requested-with, accept, origin, content-type, Authorization");
  await next();
}