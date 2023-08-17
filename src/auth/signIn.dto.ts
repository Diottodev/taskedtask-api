import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignInDto {
  @IsEmail()
  @IsNotEmpty({ message: 'Campo e-mail é obrigatório' })
  email: string;

  @IsNotEmpty({ message: 'Campo senha é obrigatório' })
  password: string;
}
