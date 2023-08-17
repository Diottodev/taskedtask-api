import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './signIn.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(data: SignInDto) {
    const user = await this.usersService.findOneEmail(data.email);

    const isValidPassword = await bcrypt.compare(data.password, user?.password);

    if (!isValidPassword) {
      throw new UnauthorizedException('E-mail ou senha incorretos');
    }
    const payload = { sub: user.id, email: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
      data: user,
      status: 'success',
    };
  }
}
