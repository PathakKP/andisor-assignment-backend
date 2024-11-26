import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({ data: createProductDto });
  }

  async findAll(page: number, limit: number) {
    const products = await this.prisma.product.findMany({
      skip: (page - 1) * limit,
      take: limit,
      include: {
        primaryVariants: {
          include: {
            secondaryVariants: true,
          },
        },
      },
    });

    const total = await this.prisma.product.count();

    return {
      total,
      products,
    };
  }

  async findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
      include: {
        primaryVariants: {
          include: {
            secondaryVariants: true,
          },
        },
      },
    });
  }

  async update(id: number, type: string, updateData: any) {
    switch (type) {
      case 'product':
        return this.prisma.product.update({
          where: { id },
          data: updateData,
        });

      case 'primary':
        return this.prisma.primaryVariant.update({
          where: { id },
          data: updateData,
        });

      case 'secondary':
        return this.prisma.secondaryVariant.update({
          where: { id },
          data: updateData,
        });

      default:
        throw new Error(
          `Invalid type: ${type}. Allowed types are 'product', 'primary', 'secondary'.`,
        );
    }
  }
}
