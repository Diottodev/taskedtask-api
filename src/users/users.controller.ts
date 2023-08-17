import { Controller, Post, Res, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { CreateAccountUserDto } from './dto/create-user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  async createAccount(
    @Body() data: CreateAccountUserDto,
    @Res() res: Response,
  ) {
    const result = await this.usersService.findOneEmail(data.email);
    try {
      if (!result) {
        const saltOrRounds = 10;

        const hash = await bcrypt.hash(data.password, saltOrRounds);
        data.password = hash;
        const user = await this.usersService.create(data);
        return res.status(201).json({
          message: 'Conta cadastrada com sucesso!',
          status: 'success',
          data: user,
        });
      }
      if (result.email === data.email)
        return res.status(400).json({
          message: 'Ops.Email já cadastrado!',
          status: 'error',
          data: null,
        });
    } catch (error) {
      throw new Error(error);
    }
  }
}
