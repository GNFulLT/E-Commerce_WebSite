/*
  Warnings:

  - You are about to alter the column `total` on the `session` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `BigInt`.

*/
-- AlterTable
ALTER TABLE `session` MODIFY `total` BIGINT NOT NULL DEFAULT 1;
