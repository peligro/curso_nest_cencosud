import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

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
}
