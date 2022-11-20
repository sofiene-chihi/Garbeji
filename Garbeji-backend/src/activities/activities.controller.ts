import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { identity } from 'rxjs';
import { ActivitiesService } from './activities.service';
import { Activity } from './activity.entity';
import { createActivityDto } from './create-activity-dto';

@Controller('activities')
export class ActivitiesController {

    constructor(private readonly activitiesService:ActivitiesService){}

    @Get('all')
    allActivities(): Promise<Activity[]>{
        return this.activitiesService.all();
    }

    @Get(':id')
    getActivity(@Param('id') id): Promise<Activity>{
        return this.activitiesService.getActivityById(id);
    }

    @Post('create')
    createActivity(@Body() createActivityDto: createActivityDto): Promise<Activity>{
        return this.activitiesService.createActivity(createActivityDto)
    }

    @Delete(':id')
    delete(@Param('id') id){
        return this.activitiesService.removeActivity(id);
    }

    @Put(':id')
    update(@Body() updateActivityDto: createActivityDto, @Param('id') id): Promise<Activity>{
        return this.activitiesService.update(updateActivityDto, id);
    }
}
