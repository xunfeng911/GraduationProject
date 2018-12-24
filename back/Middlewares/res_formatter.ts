import { Context } from 'koa';
export default async function ResFormatter(ctx: Context, next: any) {
  try {
    await next();
    console.log(ctx.params);
    const status = ctx.status;
    const data = ctx.body;
    if (ctx.method.toLowerCase() !== 'option' && status !== 404) {
      ctx.body = {
        status: 1,
        data: data,
        message: 'success'
      }
      ctx.status = status;
    }
  } catch (e) {
    ctx.status = e.status || e.statusCode || 500
    ctx.body = {
      status: 0,
      data: null,
      message: e.message || e,
    }
  }
}