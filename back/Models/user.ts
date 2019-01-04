import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, getRepository, getConnection, OneToMany } from 'typeorm';
import { Ticket } from './ticket';


@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  openid!: string;

  @Column()
  session_key!: string;

  @Column()
  avatarUrl!: string;

  @Column()
  city!: string;

  @Column()
  province!: string;

  @Column()
  gender!: number;

  @Column()
  nickName!: string;

  @OneToMany(type => Ticket, ticket => ticket.user)
  tickets!: Ticket[];
}
export interface UserProps {
  id: number;
  openid: string;
  session_key: string;
  avatarUrl: string;
  city: string;
  province: string;
  gender: number;
  nickName: string;
  tickets: any;
}
class UserModel {
  async create(data: UserProps) {
    const oldUser = await User.findOne({where: {openid: data.openid}});
    if (oldUser) {
      await getConnection()
            .createQueryBuilder()
            .update(User)
            .where('openid = :openid', {openid: data.openid})
            .set({session_key: data.session_key})
            .execute();
      return oldUser;
    }
    let _user = new User();
    _user.openid = data.openid;
    _user.session_key = data.session_key;
    _user.avatarUrl = data.avatarUrl || '';
    _user.city = data.city || '';
    _user.province = data.province || '';
    _user.gender = data.gender || 0;
    _user.nickName = data.nickName || '';
    _user.tickets = [];
    await getConnection().manager.save(_user);
    return _user;
  }
  async get(openid: number) {
    let data = await getRepository(User)
        .createQueryBuilder('user')
        .orderBy('user.openid', 'DESC')
        .where('openid = :openid', { openid: openid })
        .getOne();
    return data;
  }
  async getTicket(openid: string) {
    let data = await getRepository(User)
        .createQueryBuilder('user')
        .where('openid = :openid', { openid: openid })
        .leftJoinAndSelect("user.tickets", "ticket")
        .getOne();
    return data;
  }
}
export const userModel = new UserModel();