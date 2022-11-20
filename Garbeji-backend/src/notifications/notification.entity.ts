import { identity } from "rxjs";
import { Activity } from "src/activities/activity.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notification{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title:string;

    @Column()
    content: string;

    @ManyToOne(type => Activity)
    @JoinColumn()
    activity:Activity;
}


