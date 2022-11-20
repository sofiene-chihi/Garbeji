import { Controller, Get, Param, Request, Post, Body, UseGuards } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import {LoginDto} from './dto/login-dto'
import { RegisterDto } from './dto/register-dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService
        ){}

    @Get('all')
    allUsers(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getProfile(@Param('id') id): Promise<User>{
        return this.usersService.userProfile(id);
    }
    
}

