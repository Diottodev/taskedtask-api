import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateErrandDto } from './dto/create-errand.dto';
import { UpdateErrandDto } from './dto/update-errand.dto';

@Injectable()
export class ErrandsService {
  constructor(private prisma: PrismaService) {}

  async create(createErrandDto: CreateErrandDto) {
    const errand = await this.prisma.errands.create({
      data: createErrandDto,
    });

    return errand;
  }

  async findErrands(userId: string) {
    const errands = await this.prisma.errands.findMany({
      where: {
        userId,
      },
      orderBy: {
        created_at: 'asc',
      },
    });

    return errands;
  }

  async findOneById(id: string) {
    const errands = await this.prisma.errands.findUnique({
      where: {
        id,
      },
    });

    return errands;
  }

  async updateErrand(updateErrand: UpdateErrandDto) {
    const errand = await this.prisma.errands.update({
      where: { id: updateErrand.id },
      data: {
        message: updateErrand.message,
        isChecked: updateErrand.isChecked,
      },
    });

    return errand;
  }

  async deleteErrand(id: string) {
    const errand = await this.prisma.errands.delete({
      where: { id },
    });

    return errand;
  }
}
