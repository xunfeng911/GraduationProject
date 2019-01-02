import { Context } from 'koa';
import { POST, GET, routePrefix, required } from '../Middlewares/route/decorator';
import { ticketModel } from '../Models/ticket';
import weChatApi from '../core/api/wechat';
import { userModel } from '../Models/user';
import { timeModel } from '../Models/time';
@routePrefix("/ticket")
export class TicketController {
  constructor() {
    console.log("create new instance ticket");
  }
  @POST("create")
  @required({params: ['userName', 'stuId', 'mobile', 'startTime', 'startDate', 'address', 'price', 'openid']})
  async create(ctx: Context): Promise<void> {
    const data = await ticketModel.create(ctx.request.body);
    if (!data) {
      ctx.body = '???';
    }
    ctx.body = data;
  }
  @GET("list/:id")
  async getList(ctx: Context) {
    // const data = await ticketModel.getlistByUser(ctx.params.id);
    const data = await userModel.getTicket(ctx.params.id);
    ctx.body = data.tickets || null;
  }
  @POST("login")
  @required({query: 'code', params: ['avatarUrl', 'city', 'province', 'gender', 'nickName']})
  async login(ctx: Context) {
    const {code} = ctx.query;
    const {data} =  await weChatApi.getSession(code);
    userModel.create({...data, ...ctx.request.body});
    ctx.body = data;
  }
  @GET("getUser")
  @required({query: 'code'})
  async getUser(ctx: Context) {
    const {code} = ctx.query;
    const {data} = await weChatApi.getSession(code);
    const userData = await userModel.get(data.openid);
    if (userData) {
      ctx.body = {
        ...data,
        ...userData
      }
    } else {
      ctx.body = null;
    }
  }
  @GET('times')
  async getTimes(ctx: Context) {
    const data = await timeModel.getAll();
    let result: any = {
      date: [],
      time: []
    };
    data.map(itm => {
      result.date.push(itm.date),
      result.time.push(itm.times)
    });
    ctx.body = result;
  }
}
