import { Context } from 'koa';
import { POST, GET, routePrefix, required } from '../Middlewares/route/decorator';
import { ticketModel } from '../Models/ticket';
@routePrefix("/ticket")
export class TicketController {
  constructor() {
    console.log("create new instance ticket");
  }
  @POST("create")
  @required({params: ['userName', 'stuId', 'mobile', 'startTime', 'startDate', 'address', 'price']})
  async create(ctx: Context): Promise<void> {
    const data = await ticketModel.create(ctx.request.body);
    ctx.body = {data};
  }
  @GET("list/:id")
  async getList(ctx: Context) {
    // console.log(ctx.params);
    const data = await ticketModel.getlistByStuId(ctx.params.id);
    ctx.body = {data};
  }
}
