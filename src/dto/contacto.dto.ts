import { IsEmail, IsNotEmpty } from "class-validator";

export class ContactoDto
{
    @IsNotEmpty({message:"El campo nombre es requerido"})
    nombre:string;
    @IsNotEmpty({message:"El campo correo es requerido"})
    @IsEmail({},{message:"El correo ingresado no es válido"})
    correo: string;
    @IsNotEmpty({message:"El campo telefono es requerido"})
    telefono: string;
}

/*
{
    "nombre":"María Martínez",
    "correo":"mary@cesarcancino.com",
    "telefono":"+565656465"
}
*/