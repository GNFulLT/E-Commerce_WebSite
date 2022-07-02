/*
  Warnings:

  - You are about to drop the column `updated_ad` on the `session` table. All the data in the column will be lost.
  - Added the required column `expire_at` to the `session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `session` DROP COLUMN `updated_ad`,
    ADD COLUMN `expire_at` DATETIME(3) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
