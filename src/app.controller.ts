import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  //hot reload

  @Get()
  getHello(): string {
    return "hola mundo desde CENCOSUD para que el patrón se sienta orgulloso de nosotros!!!";
  }
}
