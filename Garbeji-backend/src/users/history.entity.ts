import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Activity } from '../activities/activity.entity';

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(type => Activity, activity => activity.history)
  histories: History[];  

}