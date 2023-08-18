import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { ErrandsService } from './errands/errands.service';
import { ErrandsController } from './errands/errands.controller';
import { ErrandsModule } from './errands/errands.module';
import { AppController } from './app.controller';

@Module({
  imports: [ErrandsModule, UsersModule, AuthModule],
  controllers: [
    AppController,
    ErrandsController,
    UsersController,
    AuthController,
  ],
  providers: [ErrandsService, PrismaService, UsersService, AuthService],
})
export class AppModule {}
