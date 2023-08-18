import { Controller, Res, Get } from '@nestjs/common';
import { Response } from 'express';

@Controller('/')
export class AppController {
  @Get()
  async createAccount(@Res() res: Response) {
    return res.send('Aplicação rodando com sucesso');
  }
}
