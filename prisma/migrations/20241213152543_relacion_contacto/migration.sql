-- AlterTable
ALTER TABLE `contacto` ADD COLUMN `estado_id` INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE `contacto` ADD CONSTRAINT `contacto_estado_id_fkey` FOREIGN KEY (`estado_id`) REFERENCES `estado`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
