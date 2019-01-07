import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';


@Entity()
export class Total extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  date_time!: string;

  @Column()
  type!: string;

  @Column()
  total!: number;
}