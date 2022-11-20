import { Injectable } from '@nestjs/common';
import { Activity } from './activity.entity';
import { createActivityDto } from './create-activity-dto';

@Injectable()
export class ActivitiesService {

    async all(): Promise<Activity[]>{
        const allActivities= Activity.find();
        return allActivities;
    }   

    async getActivityById(id: number): Promise<Activity>{
        const activity= Activity.findOne({id: id});
        return activity;
    }

    async createActivity( activity: createActivityDto): Promise<Activity>{
        const newActivity: Activity= new Activity()
        newActivity.time = activity.time,
        newActivity.location = activity.location,
        newActivity.status = activity.status,
        newActivity.client =activity.client,
        newActivity.provider= activity.provider

        await Activity.save(newActivity);
        return newActivity;
        
    }

    async removeActivity(id: number){
        const activity= await Activity.findOne({id:id})
        await activity.remove();
        return ("activity is removed");
    }

    async update(activity: createActivityDto, id:number): Promise<Activity>{
        const newActivity = new Activity();
        newActivity.id= id;
        newActivity.time = activity.time; 
        newActivity.location = activity.location; 
        newActivity.status = activity.status; 
        newActivity.client = activity.client; 
        newActivity.provider = activity.provider; 

        await Activity.save(newActivity);
        return newActivity;
    }


}
