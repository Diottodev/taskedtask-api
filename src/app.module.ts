import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { ErrandsService } from './errands/errands.service';
import { ErrandsController } from './errands/Errands.controller';
import { ErrandsModule } from './errands/errands.module';

@Module({
  imports: [ErrandsModule, UsersModule, AuthModule],
  controllers: [ErrandsController, UsersController, AuthController],
  providers: [ErrandsService, PrismaService, UsersService, AuthService],
})
export class AppModule {}
