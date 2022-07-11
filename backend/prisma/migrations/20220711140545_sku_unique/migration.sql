/*
  Warnings:

  - A unique constraint covering the columns `[SKU]` on the table `product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `product_SKU_key` ON `product`(`SKU`);
