import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ContactoDto } from 'src/dto/contacto.dto';
import slugify from 'slugify';

@Injectable()
export class ContactosService 
{
    private prisma:any;
    constructor()
    {
        this.prisma = new PrismaClient();
    }

    async getDatos()
    {
        return await this.prisma.contacto.findMany(
            {
                orderBy:[ 
                    {
                        id:'desc'
                    }
                ]
            }
        );
    }

    async getDato(id:any)
    {
        let datos =  await this.prisma.contacto.findFirst(
            {
                where:{
                    id: id
                }
            }
        );
        if(!datos)
        {
            throw new HttpException({estado:"error", mensaje:"Ocurrió un error inesperado"}, HttpStatus.BAD_REQUEST, {  cause: {name:"", message:""} });
        }else
        {
            return datos;
        }
    }
    async addDatos(dto: ContactoDto){
        //validar que no exista el nombre
        let existe =  await this.prisma.contacto.findFirst(
            {
                where:{
                    nombre: dto.nombre
                }
            }
        );
        if(existe)
        {
            throw new HttpException({estado:"error", mensaje:"Ocurrió un error inesperado"}, HttpStatus.BAD_REQUEST, {  cause: {name:"", message:""} });  
        }else
        {
            //creo el registro
            await this.prisma.contacto.create(
                {
                    data:
                    {
                        nombre: dto.nombre,
                        correo: dto.correo,
                        telefono: dto.telefono,
                        slug:slugify(dto.nombre.toLowerCase())
                    }
                });
            return {estado:"ok", mensaje: "Se crea el registro exitosamente"}
        }
        
    }
    async updateDatos(id: any, dto: ContactoDto)
    {
        let existe =  await this.prisma.contacto.findFirst(
            {
                where:{
                    id: id
                }
            }
        );
        if(!existe)
        {
            throw new HttpException({estado:"error", mensaje:"Ocurrió un error inesperado"}, HttpStatus.BAD_REQUEST, {  cause: {name:"", message:""} });
        }else
        {
            await this.prisma.contacto.update(
                {
                    where:{
                        id:id
                    },
                    data:
                    {
                        nombre: dto.nombre,
                        correo: dto.correo,
                        telefono: dto.telefono,
                        slug:slugify(dto.nombre.toLowerCase())
                    }
                });
            return {estado:"ok", mensaje: "Se modifica el registro exitosamente"}
        }
    }
    async deleteDato(id:any)
    {
        let existe =  await this.prisma.contacto.findFirst(
            {
                where:{
                    id: id
                }
            }
        );
        if(!existe)
        {
            throw new HttpException({estado:"error", mensaje:"Ocurrió un error inesperado"}, HttpStatus.BAD_REQUEST, {  cause: {name:"", message:""} });
        }else
        {
            await this.prisma.contacto.delete({
                where:{
                    id:id
                }
            });
            return {estado:"ok", mensaje: "Se elimina el registro exitosamente"}
        }
    }
}
