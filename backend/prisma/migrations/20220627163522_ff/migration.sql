/*
  Warnings:

  - Made the column `image_id` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_image_id_fkey`;

-- AlterTable
ALTER TABLE `user` MODIFY `image_id` INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_image_id_fkey` FOREIGN KEY (`image_id`) REFERENCES `image`(`id`) ON DELETE SET DEFAULT ON UPDATE CASCADE;
