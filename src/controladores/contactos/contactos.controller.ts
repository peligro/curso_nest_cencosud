import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ContactoDto } from 'src/dto/contacto.dto';
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

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @UsePipes(new ValidationPipe())
    create(@Body() dto:ContactoDto)
    {
        return this.contactosService.addDatos(dto);
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    @UsePipes(new ValidationPipe())
    update(@Param() params, @Body() dto:ContactoDto)
    {
        return this.contactosService.updateDatos(parseInt(params.id), dto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    destroy(@Param() params)
    {
        return this.contactosService.deleteDato(parseInt(params.id));
    }
}
