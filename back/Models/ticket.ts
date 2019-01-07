import { Total } from './total';
import { User } from './user';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, getRepository, getConnection, ManyToOne } from 'typeorm';


@Entity()
export class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userName!: string;

  @Column('bigint')
  stuId!: number;

  @Column('bigint')
  mobile!: number;

  @Column()
  route!: string;

  @Column()
  startTime!: string;

  @Column()
  startDate!: string;

  @Column()
  address!: string;

  @Column()
  price!: number;

  @ManyToOne(type => User, user => user.tickets)
  user!: User;

}
export interface TicketProps {
  id: number;
  userName: string;
  stuId: number;
  mobile: number;
  route: string;
  startTime: string;
  startDate: string;
  address: string;
  price: number;
  openid: string;
}
class TicketModel {
  async create(data: TicketProps) {
    let _ticket = new Ticket();
    _ticket.userName = data.userName;
    _ticket.stuId = data.stuId;
    _ticket.mobile = data.mobile;
    _ticket.route = data.route;
    _ticket.startTime = data.startTime;
    _ticket.startDate = data.startDate;
    _ticket.address = data.address;
    _ticket.price = data.price;
    const oldUser = await User.findOne({where: {openid: data.openid}});
    if (oldUser) {
      const date_time = data.startDate + ' ' + data.startTime;
      Total.findOne({where: {date_time: date_time, type: data.route}}).then(oldTotal => {
        if (oldTotal) {
          oldTotal.total += 1;
          getConnection().manager.save(oldTotal);
        } else {
          let _total = new Total();
          _total.date_time = date_time;
          _total.type = data.route;
          _total.total = 1;
          getConnection().manager.save(_total);
        }
      })
      _ticket.user = oldUser;
      getConnection().manager.save(_ticket);
    } else {
      return false;
    }
  return _ticket;
  }
  async getlistByStuId(stuId: number) {
    let data = await getRepository(Ticket)
        .createQueryBuilder('ticket')
        .orderBy('ticket.id', 'DESC')
        .where('stuId = :stuId', { stuId: stuId })
        .getMany();
    return data;
  }
  async getlistByMobile(mobile: number) {
    let data = await getRepository(Ticket)
        .createQueryBuilder('ticket')
        .orderBy('ticket.id', 'DESC')
        .where('mobile = :mobile', { mobile: mobile })
        .getMany();
    return data;
  }
  async getlistByUser(openid: string) {
    const tickets = await  getRepository(Ticket)
      .createQueryBuilder("ticket")
      .leftJoinAndSelect("ticket.user", "user")
      .getMany();
    return tickets;
  }
  async getlistByDate(date: string) {
    let data = await getRepository(Ticket)
      .createQueryBuilder('ticket')
      .orderBy('ticket.startTime', 'DESC')
      .where('startDate = :startDate', { startDate: date })
      .getMany();
    return data;
  }
  async getlist() {
    let data = await getRepository(Ticket)
      .createQueryBuilder('ticket')
      .orderBy('ticket.startTime', 'DESC')
      .getMany();
    return data;
  }

}
export const ticketModel = new TicketModel();