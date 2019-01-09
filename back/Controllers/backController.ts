import { Total } from './../Models/total';
import { Context } from 'koa';
import { POST, routePrefix, required, GET } from '../Middlewares/route/decorator';
import { timeModel } from '../Models/time';
import { ticketModel } from '../Models/ticket';
import { getRepository } from 'typeorm';

@routePrefix("/back")
export class BackController {
  constructor() {
    console.log("create new instance back");
  }

  @POST("login")
  @required({params: ['name', 'password']})
  async login(ctx: Context) {
    let {name, password} = ctx.request.body;
    if (name === 'keshe2019' && password === 'keshe2019') {
      ctx.body = true;
    } else {
      ctx.body = false;
    }
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

  @GET("data/:date")
  async getDataByDate(ctx: Context) {
    const tickets = await ticketModel.getlistByDate(ctx.params.date);
    let result: any = {
      times: [],
      train: [],
      plane: [],
      gaotie: []
    };
    tickets.map(itm => {
      if (itm.startTime !== result.times[result.times.length - 1]) {
        result.times.push(itm.startTime);
        result.train.push(0);
        result.plane.push(0);
        result.gaotie.push(0);
        result[itm.route][result.times.length - 1] += 1;
      } else {
        result[itm.route][result.times.length - 1] += 1;
      }
    })
    ctx.body = {...result};
  }
  @GET("data")
  async getData(ctx: Context) {
    const data = await getRepository(Total)
      .createQueryBuilder('total')
      .getMany();
    ctx.body = data;
  }
  @GET("table")
  @required({query: ['page', 'size', 'date']})
  async getTable(ctx: Context) {
    const {page, size, date, mobile} = ctx.query;
      ctx.body = await ticketModel.getListPage(date, page, size, mobile);
  }
}
