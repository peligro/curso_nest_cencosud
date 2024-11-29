import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ContactosService } from 'src/services/contactos.service';

@Controller('contactos')
export class ContactosController 
{
    constructor(private contactosService:ContactosService)
    {

    }

    @Get()
    @HttpCode(HttpStatus.OK)
    index()
    {
        return this.contactosService.getDatos();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    show(@Param() params)
    {
        return this.contactosService.getDato(parseInt(params.id));
    }

}
