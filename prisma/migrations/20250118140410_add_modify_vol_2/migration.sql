/*
  Warnings:

  - You are about to drop the column `actualProduceDate` on the `Volume` table. All the data in the column will be lost.
  - You are about to drop the column `actualProduction` on the `Volume` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Volume" DROP COLUMN "actualProduceDate",
DROP COLUMN "actualProduction";
