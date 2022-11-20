import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { Seed } from './seed.class';
import { User } from './users/user.entity';

@Injectable()
export class AppService extends Seed{
  constructor(entityManager: EntityManager) {
    super(entityManager);
   // this.fakeIt(User);
  
  
  
    // this.entityManager
    //   .save<User, Partial<User>> (User, [
    //     {
    //       firstName:'sofiene',
    //       lastName: 'chihi',
    //       email:'chihisofiene@gmail.com',
    //       password:'mrigl' 
    //     }
    //   ])
    //   .then((data: Array<Partial<User>>)=>{
    //     console.log (data);
    //   })
    //   .catch(console.error);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
