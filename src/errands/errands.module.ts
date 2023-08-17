import { Module } from '@nestjs/common';
import { ErrandsService } from './errands.service';
import { ErrandsController } from './errands.controller';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [ErrandsController],
  providers: [ErrandsService, PrismaService, UsersService],
})
export class ErrandsModule {}
