import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  state: string;

  @Column()
  delegation: string;

  @Column()
  width: number;

  @Column()
  height: number;

  @OneToMany(type => User, user => user.location)
  users: User[];

}