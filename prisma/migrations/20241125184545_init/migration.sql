-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "discountPercentage" DOUBLE PRECISION NOT NULL,
    "inventory" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL,
    "leadTime" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PrimaryVariant" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "discountPercentage" DOUBLE PRECISION NOT NULL,
    "inventory" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "PrimaryVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SecondaryVariant" (
    "id" SERIAL NOT NULL,
    "primaryVariantId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "discountPercentage" DOUBLE PRECISION NOT NULL,
    "inventory" INTEGER NOT NULL,

    CONSTRAINT "SecondaryVariant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PrimaryVariant" ADD CONSTRAINT "PrimaryVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SecondaryVariant" ADD CONSTRAINT "SecondaryVariant_primaryVariantId_fkey" FOREIGN KEY ("primaryVariantId") REFERENCES "PrimaryVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
