import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus, Header } from '@nestjs/common';
import { EjemploDto } from 'src/dto/ejemplo.dto';
import { EjemploInterface } from 'src/interfaces/ejemplo-interface/ejemplo-interface.interface';


//anotaciones del tipo decoradores --> decorador
@Controller('ejemplo')
export class EjemploControllerController 
{
    @Get()
    @HttpCode(HttpStatus.OK)
    @Header('cabecero_cesar', 'www.cesarcancino.com')
    index():EjemploInterface{
        //return "Método GET";
        return {estado:"ok", mensaje:"Método GET"}
    }

    @Get(":id")
    show(@Param() param){
        //return "Método GET | id="+param.id;
        return {estado:"ok", mensaje:"Método GET | id="+param.id}
    }

    @Post()
    create(@Body() dto:EjemploDto){
        //return "Método POST | título="+dto.titulo+ " | descripción="+dto.descripcion+ " | precio="+dto.precio;
        return {estado:"ok", mensaje:"Método POST | título="+dto.titulo+ " | descripción="+dto.descripcion+ " | precio="+dto.precio}
    }
    /*
     @Post()
    create(@Body() json){
        return "Método POST | título="+json.titulo+ " | descripción="+json.descripcion+ " | precio="+json.precio;
    }
    */

    @Put(":id")
    update(@Param() param){
        //return "Método PUT | id="+param.id;
        return {estado:"ok", mensaje:"Método PUT | id="+param.id}
    }

    @Delete(":id")
    destroy(@Param() param){
        //return "Método DELETE | id="+param.id;
        return {estado:"ok", mensaje:"Método DELETE | id="+param.id}
    }
}

/*
 @Get()
    index(){
        return "Método GET";
    }

    @Post()
    create(){
        return "Método POST";
    }

    @Put()
    update(){
        return "Método PUT";
    }

    @Delete()
    destroy(){
        return "Método DELETE";
    }
*/
