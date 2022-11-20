import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivitiesController } from './activities.controller';
import { ActivitiesService } from './activities.service';
import { Activity } from './activity.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Activity])],
    controllers: [ActivitiesController],
    providers: [ActivitiesService]

})
export class ActivitiesModule {

}
