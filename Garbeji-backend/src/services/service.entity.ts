import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/user.entity";
import { time } from "console";

@Entity()
export class Service extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column({type: "time"})
    worktime_start;
  
    @Column({type: "time"})
    worktime_end;

    @Column()
    price: number;
  
    @Column()
    category: string;
  
    @Column()
    availibility: string;

    @Column()
    description: string;

    @Column()
    img_url: string;

    @ManyToOne(type => User)
    @JoinColumn()
    user:User;
  }