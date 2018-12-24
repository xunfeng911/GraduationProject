import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, getRepository, ManyToMany, JoinTable, getConnection } from 'typeorm';


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
    console.log(_ticket);

   const a = await getConnection().manager.save(_ticket);
   console.log(a);
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

}
export const ticketModel = new TicketModel();