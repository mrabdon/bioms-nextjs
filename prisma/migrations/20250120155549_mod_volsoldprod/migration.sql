/*
  Warnings:

  - You are about to drop the column `producerId` on the `Volume` table. All the data in the column will be lost.
  - You are about to drop the `_ConsumerToVolumeSoldToProducer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProducerToVolumeSoldToProducer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_VolumeToVolumeSoldToProducer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Volume" DROP CONSTRAINT "Volume_producerId_fkey";

-- DropForeignKey
ALTER TABLE "_ConsumerToVolumeSoldToProducer" DROP CONSTRAINT "_ConsumerToVolumeSoldToProducer_A_fkey";

-- DropForeignKey
ALTER TABLE "_ConsumerToVolumeSoldToProducer" DROP CONSTRAINT "_ConsumerToVolumeSoldToProducer_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProducerToVolumeSoldToProducer" DROP CONSTRAINT "_ProducerToVolumeSoldToProducer_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProducerToVolumeSoldToProducer" DROP CONSTRAINT "_ProducerToVolumeSoldToProducer_B_fkey";

-- DropForeignKey
ALTER TABLE "_VolumeToVolumeSoldToProducer" DROP CONSTRAINT "_VolumeToVolumeSoldToProducer_A_fkey";

-- DropForeignKey
ALTER TABLE "_VolumeToVolumeSoldToProducer" DROP CONSTRAINT "_VolumeToVolumeSoldToProducer_B_fkey";

-- AlterTable
ALTER TABLE "Volume" DROP COLUMN "producerId";

-- AlterTable
ALTER TABLE "VolumeSoldToProducer" ADD COLUMN     "consumerId" TEXT,
ADD COLUMN     "producerId" TEXT,
ADD COLUMN     "volumeId" INTEGER;

-- DropTable
DROP TABLE "_ConsumerToVolumeSoldToProducer";

-- DropTable
DROP TABLE "_ProducerToVolumeSoldToProducer";

-- DropTable
DROP TABLE "_VolumeToVolumeSoldToProducer";

-- CreateTable
CREATE TABLE "_ProducerToVolume" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProducerToVolume_AB_unique" ON "_ProducerToVolume"("A", "B");

-- CreateIndex
CREATE INDEX "_ProducerToVolume_B_index" ON "_ProducerToVolume"("B");

-- AddForeignKey
ALTER TABLE "VolumeSoldToProducer" ADD CONSTRAINT "VolumeSoldToProducer_volumeId_fkey" FOREIGN KEY ("volumeId") REFERENCES "Volume"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VolumeSoldToProducer" ADD CONSTRAINT "VolumeSoldToProducer_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VolumeSoldToProducer" ADD CONSTRAINT "VolumeSoldToProducer_consumerId_fkey" FOREIGN KEY ("consumerId") REFERENCES "Consumer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProducerToVolume" ADD CONSTRAINT "_ProducerToVolume_A_fkey" FOREIGN KEY ("A") REFERENCES "Producer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProducerToVolume" ADD CONSTRAINT "_ProducerToVolume_B_fkey" FOREIGN KEY ("B") REFERENCES "Volume"("id") ON DELETE CASCADE ON UPDATE CASCADE;
