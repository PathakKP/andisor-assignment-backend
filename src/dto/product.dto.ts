import { PartialType } from '@nestjs/swagger';

export class CreateSecondaryVariantDto {
  name: string;
  price: number;
  discountPercentage: number;
  inventory: number;
}

export class CreatePrimaryVariantDto {
  name: string;
  price: number;
  discountPercentage: number;
  inventory: number;
  active: boolean;
  secondaryVariants?: CreateSecondaryVariantDto[];
}

export class CreateProductDto {
  title: string;
  price: number;
  discountPercentage: number;
  inventory: number;
  active: boolean;
  leadTime: string;
  description: string;
  category: string;
  image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

export class UpdateSecondaryVariantDto extends PartialType(
  CreateSecondaryVariantDto,
) {}

export class UpdatePrimaryVariantDto extends PartialType(
  CreatePrimaryVariantDto,
) {
  secondaryVariants?: CreateSecondaryVariantDto[];
}
