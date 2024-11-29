/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `contacto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `contacto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `contacto` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `contacto_slug_key` ON `contacto`(`slug`);
