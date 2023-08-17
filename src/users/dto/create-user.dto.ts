import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAccountUserDto {
  @IsEmail()
  @IsNotEmpty({ message: 'Campo e-mail é obrigatório' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Campo nome é obrigatório' })
  name: string;

  @IsNotEmpty({ message: 'Campo senha é obrigatório' })
  password: string;
}
