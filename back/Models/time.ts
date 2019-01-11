import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, getRepository, getConnection } from 'typeorm';


@Entity()
export class Time extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  date!: string;

  @Column()
  type!: string;

  @Column("simple-array")
  times!: string[];


}
export interface TimeProps {
  id: number;
  date: string;
  time: string;
  type: string;
}
class TimeModel {
  async create(data: TimeProps) {
    const _time = await Time.findOne({where: {date: data.date}});
    if (_time) {
      const hasTime = _time.times.some((itm) => itm === data.time);
      if (hasTime) {
        return false;
      } else {
        const times = [..._time.times, data.time].sort((a, b) => {
          const timeOne = + a.split(':')[0] * 24 + a.split(':')[1];
          const timeTwo = + b.split(':')[0] * 24 + a.split(':')[1];
          return timeOne > timeTwo ? 1 : -1;
        });
        await getConnection()
              .createQueryBuilder()
              .update(Time)
              .where('date = :date', {date: data.date})
              .set({times: times})
              .execute();
        return true;
      }
    }
    let _newTime = new Time();
    _newTime.date = data.date;
    _newTime.type = data.type;
    _newTime.times = [data.time];
    await getConnection().manager.save(_newTime);
    return true;
  }
  async deleteByDate(date: string ) {
    const data =await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Time)
      .where('date = :date', { date: date})
      .execute();
    return data;
  }

  async deleteTime(date: string, time: string) {
    const _time = await Time.findOne({where: {date: date}});
   if (_time) {
    const hasTime = _time.times.some((itm) => itm === time);
    if (hasTime) {
      return false;
    } else {
      const times = _time.times.filter(itm => itm !== time);
      await getConnection()
        .createQueryBuilder()
        .update(Time)
        .where('date = :date', {date: date})
        .set({times: times})
        .execute();
      return true;
    }
   } else {
     return false;
   }
  }
  async getAll() {
    let data = await getRepository(Time)
      .createQueryBuilder('time')
      .getMany();
    return data;
  }
  async getOne(date: string) {
    let data = await getRepository(Time)
      .createQueryBuilder('time')
      .where('date = :date', { date: date })
      .getOne();
    return data;
  }

}
export const timeModel = new TimeModel();