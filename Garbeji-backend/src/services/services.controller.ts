import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ServicesService } from './services.service';
import { Service } from './service.entity';
import { createServiceDto } from './dto/create-service-dto';
@Controller('services')
export class ServicesController {

    constructor(private readonly servicesService: ServicesService){}

    @Get('all')
    allServices(): Promise<Service[]> {
        return this.servicesService.findAll();
    }

    @Get(':id')
    getService(@Param('id') id): Promise<Service> {
        return this.servicesService.getService(id);
    }

    @Post('create')
    createService(@Body() createServiceDto: createServiceDto): Promise<Service>{
        return this.servicesService.createService(createServiceDto);
    }

    @Delete(':id')
    delete(@Param('id') id){
        return this.servicesService.removeService(id);
    }

    @Put(':id')
    update(@Body() updateServiceDto: createServiceDto, @Param('id') id): Promise<Service>{
        return this.servicesService.update(updateServiceDto, id);
    }

}
