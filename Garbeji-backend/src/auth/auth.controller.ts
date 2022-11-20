import { BadRequestException, Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from 'src/users/dto/register-dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from 'src/users/dto/login-dto';
import { User } from 'src/users/user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  @Post('register')
  async register(@Body() body: RegisterDto) {
    const hashed = await bcrypt.hash(body.password,8);
    const user : any=  await this.usersService.createUser({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: hashed,
      profession: body.profession,
      phone: body.phone,
      bio: body.bio,
      stars: body.stars,
      img_url: body.img_url
    })
    if(user == null){
    return new BadRequestException("email already used !")
    }
    return user;
  }

  @Post('login')
  async login(@Body() body:LoginDto){
    console.log(body);
      const user: User = await this.usersService.getUserCredentials(body.email);
      if( !user ){
          throw new NotFoundException("User not found !")
      }

      if(!(await bcrypt.compare(body.password, user.password))){
          throw new BadRequestException( "Password invalid !");
      }

      const jwt= this.jwtService.signAsync({email: user.email})
      return{
          user : user,
          access_token: (await jwt).toString()
      };

  }

}
