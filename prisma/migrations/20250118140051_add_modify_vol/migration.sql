-- AlterTable
ALTER TABLE "Volume" ADD COLUMN     "actualProduceDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "actualProduction" INTEGER;
