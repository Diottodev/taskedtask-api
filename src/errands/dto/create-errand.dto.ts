import { IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateErrandDto {
  @IsNotEmpty({ message: 'Campo recado é obrigatório' })
  message: string;

  @IsBoolean()
  @IsNotEmpty({ message: 'Campo concluido é obrigatório' })
  isChecked: boolean;
}
