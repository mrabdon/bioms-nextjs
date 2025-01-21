/*
  Warnings:

  - You are about to drop the `_ProducerToVolume` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProducerToVolume" DROP CONSTRAINT "_ProducerToVolume_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProducerToVolume" DROP CONSTRAINT "_ProducerToVolume_B_fkey";

-- AlterTable
ALTER TABLE "Volume" ADD COLUMN     "consumerId" TEXT,
ADD COLUMN     "producerId" TEXT;

-- DropTable
DROP TABLE "_ProducerToVolume";

-- AddForeignKey
ALTER TABLE "Volume" ADD CONSTRAINT "Volume_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Volume" ADD CONSTRAINT "Volume_consumerId_fkey" FOREIGN KEY ("consumerId") REFERENCES "Consumer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
