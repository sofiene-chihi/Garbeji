import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Location } from './location.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { History } from './history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Location, History])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
