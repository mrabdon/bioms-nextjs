/*
  Warnings:

  - You are about to drop the column `actualProduceDate` on the `Volume` table. All the data in the column will be lost.
  - You are about to drop the column `actualProduction` on the `Volume` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ActualProduce" ALTER COLUMN "month" DROP NOT NULL,
ALTER COLUMN "month" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Volume" DROP COLUMN "actualProduceDate",
DROP COLUMN "actualProduction";
