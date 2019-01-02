import { Context } from 'koa';
import { POST, routePrefix, required, GET } from '../Middlewares/route/decorator';
import { timeModel } from '../Models/time';

@routePrefix("/back")
export class BackController {
  constructor() {
    console.log("create new instance back");
  }
  @POST("times/create")
  @required({params: ['date', 'time']})
  async create(ctx: Context) {
    const data = await timeModel.create(ctx.request.body);
    if (data) {
      ctx.body = true
    } else {
      ctx.throw(200, '该时间已存在');
    }
  }

  @GET("times")
  async getAllTimes(ctx: Context) {
    const data = await timeModel.getAll();
    ctx.body = data;
  }
  @GET("times/:date")
  async getTimesByDate(ctx: Context) {
    const data = await timeModel.getOne(ctx.params.date);
    ctx.body = data;
  }
}
