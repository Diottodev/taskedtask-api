import {
  Controller,
  Post,
  Res,
  UseGuards,
  Param,
  Delete,
  Put,
  Get,
  Req,
} from '@nestjs/common';
import { ErrandsService } from './errands.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { UsersService } from 'src/users/users.service';
import { Response, Request } from 'express';

@UseGuards(AuthGuard)
@Controller('errands')
export class ErrandsController {
  constructor(
    private readonly errandsService: ErrandsService,
    private readonly userService: UsersService,
  ) {}

  @Post('/create/:userId')
  async createErrand(
    @Param('userId') userId: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const { message, isChecked } = req.body;
    try {
      const errandData = {
        message,
        isChecked,
        userId,
      };
      const result = await this.errandsService.create(errandData);

      return res.status(201).json({
        message: 'Recado criado com sucesso!',
        status: 'success',
        data: result,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get('/:userId')
  async getErrands(@Param('userId') userId: string, @Res() res: Response) {
    try {
      const result = await this.errandsService.findErrands(userId);

      return res.status(200).json({
        message: 'Recados econtrados com sucesso!',
        status: 'success',
        data: result,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Put('/update/:userId/:id')
  async updateErrand(
    @Param('userId') userId: string,
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res,
  ) {
    const { message, isChecked } = req.body;

    const user = await this.userService.findOneById(userId);

    if (!user) {
      return res.status(400).json({
        message: 'Usuario não encontrado!',
        status: 'error',
        data: null,
      });
    }

    try {
      const errandData = {
        id,
        message,
        isChecked,
        userId,
      };
      const result = await this.errandsService.updateErrand(errandData);

      return res.status(200).json({
        message: 'Recado alterado com sucesso!',
        status: 'success',
        data: result,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Delete('/delete/:userId/:id')
  async deleteErrand(
    @Param('userId') userId: string,
    @Param('id') id: string,
    @Res() res: Response,
  ) {
    const user = await this.userService.findOneById(userId);

    if (!user) {
      return res.status(400).json({
        message: 'Usuario não encontrado!',
        status: 'error',
        data: null,
      });
    }
    try {
      const result = await this.errandsService.deleteErrand(id);

      return res.status(200).json({
        message: 'Recado deletado com sucesso!',
        status: 'success',
        data: result,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
