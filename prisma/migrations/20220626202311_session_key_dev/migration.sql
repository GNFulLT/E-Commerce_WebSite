/*
  Warnings:

  - Added the required column `sessionKey` to the `session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `country` MODIFY `image_id` INTEGER NOT NULL DEFAULT 2;

-- AlterTable
ALTER TABLE `session` ADD COLUMN `sessionKey` TEXT NOT NULL;
