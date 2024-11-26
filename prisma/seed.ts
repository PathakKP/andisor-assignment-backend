import { PrismaClient } from '@prisma/client';
import data from './DummyAPI.json';

const prisma = new PrismaClient();

async function main() {
  for (const product of data) {
    await prisma.product.create({
      data: {
        title: product.title,
        price: product.price,
        discountPercentage: product.discountPercentage,
        inventory: Number(product.inventory),
        active: product.active,
        leadTime: product.leadTime,
        description: product.description,
        category: product.category,
        image: product.image,
        primaryVariants: {
          create: product.primary_variants.map((pv) => ({
            name: pv.name,
            price: pv.price,
            discountPercentage: pv.discountPercentage,
            inventory: pv.inventory,
            active: pv.active,
            secondaryVariants: {
              create: pv.secondary_variants.map((sv) => ({
                name: sv.name,
                price: sv.price,
                discountPercentage: sv.discountPercentage,
                inventory: sv.inventory,
              })),
            },
          })),
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
