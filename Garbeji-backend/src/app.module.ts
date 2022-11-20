import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity'
import { Location } from './users/location.entity';
import { ServicesModule } from './services/services.module';
import { Service } from './services/service.entity';
import { History } from './users/history.entity';
import { Activity } from './activities/activity.entity';
import { ActivitiesController } from './activities/activities.controller';
import { ActivitiesService } from './activities/activities.service';
import { ActivitiesModule } from './activities/activities.module';
import { NotificationsModule } from './notifications/notifications.module';
import { Notification } from './notifications/notification.entity';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'sofienechihi',
      database: 'garbeji',
      entities: [User, Location,Service, History, Activity, Notification],
      synchronize: true,
  }), UsersModule, ServicesModule, ActivitiesModule, NotificationsModule, AuthModule],
  controllers: [AppController, ActivitiesController],
  providers: [AppService, ActivitiesService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
