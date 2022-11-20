import { Injectable } from '@nestjs/common';
import { createActivityDto } from 'src/activities/create-activity-dto';
import { createServiceDto } from './dto/create-service-dto';
import { Service } from './service.entity';
@Injectable()
export class ServicesService {

    async findAll(): Promise<Service[]>{
        const services= await Service.find();
        return services;
    }

    async getService(id: number) : Promise<Service> {
        const service= await Service.findOne({id: id});
        return service;
    }

    async createService( service: createServiceDto): Promise<Service> {
        const newService: Service = new Service()
        newService.name = service.name; 
        newService.worktime_start = service.worktime_start; 
        newService.worktime_end = service.worktime_end; 
        newService.price = service.price; 
        newService.category = service.category; 
        newService.availibility = service.availibility; 
        newService.description = service.description; 

        await Service.save(newService);
        return newService;
    }

    async removeService( id: number){
        const service = await Service.findOne({id :id})
        await service.remove();
        return ("service is removed");
    }


    async update(service: createServiceDto, id:number): Promise<Service>{
        const newService = new Service();
        newService.id= id;
        newService.name = service.name; 
        newService.worktime_start = service.worktime_start; 
        newService.worktime_end = service.worktime_end; 
        newService.price = service.price; 
        newService.category = service.category; 
        newService.availibility = service.availibility; 
        newService.description = service.description;

        await Service.save(newService);
        return newService;
    }

}
