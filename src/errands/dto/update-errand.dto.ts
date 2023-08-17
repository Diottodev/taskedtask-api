import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateErrandDto } from './create-errand.dto';

export class UpdateErrandDto extends PartialType(CreateErrandDto) {
  @IsString()
  @IsNotEmpty()
  id: string;
}
