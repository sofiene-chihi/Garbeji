import { EntityManager } from "typeorm";
import { User } from "./users/user.entity";
import { internet, name,address,  random, lorem } from 'faker';
import { Location } from "./users/location.entity";
import { History } from "./users/history.entity";

export class Seed {
    constructor(private readonly entityManager: EntityManager) {}

    fakeIt<T>(entity:any): void{
        switch(entity) {
            case User:
                this.addData(this.userData(), entity);
            default: break;
        }
    }

    private userData(): Array<Partial<User>> {

        
        return Array.from({ length: 100}).map<Partial<User>>(() =>{
        
            var histori= new History();
            const locations = new Location();
            locations.delegation= address.city();
            locations.height= address.longitude;
            locations.width= address.latitude;
            locations.state= address.state();
            return{
                firstName: name.firstName(),
                lastName: name.lastName(),
                email: internet.email(),
                password: internet.password(),
                location: locations,
                history: histori

            }
        })
    }

    private addData<T>( data: Array<Partial<T>>, entity: any): void{
        this.entityManager
            .save<T,T>(entity, data as any)
            .then ((savedData: Array<Partial<T>>) =>console.log(savedData))
            .catch(console.error)

    }

}