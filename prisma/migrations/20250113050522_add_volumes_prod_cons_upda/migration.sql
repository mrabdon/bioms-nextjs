/*
  Warnings:

  - You are about to drop the column `consumerId` on the `VolumeSoldToProducer` table. All the data in the column will be lost.
  - You are about to drop the column `producerId` on the `VolumeSoldToProducer` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "VolumeSoldToProducer" DROP CONSTRAINT "VolumeSoldToProducer_consumerId_fkey";

-- DropForeignKey
ALTER TABLE "VolumeSoldToProducer" DROP CONSTRAINT "VolumeSoldToProducer_producerId_fkey";

-- DropForeignKey
ALTER TABLE "VolumeSoldToProducer" DROP CONSTRAINT "VolumeSoldToProducer_volumeId_fkey";

-- AlterTable
ALTER TABLE "VolumeSoldToProducer" DROP COLUMN "consumerId",
DROP COLUMN "producerId";

-- CreateTable
CREATE TABLE "_VolumeToVolumeSoldToProducer" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ProducerToVolumeSoldToProducer" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ConsumerToVolumeSoldToProducer" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_VolumeToVolumeSoldToProducer_AB_unique" ON "_VolumeToVolumeSoldToProducer"("A", "B");

-- CreateIndex
CREATE INDEX "_VolumeToVolumeSoldToProducer_B_index" ON "_VolumeToVolumeSoldToProducer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProducerToVolumeSoldToProducer_AB_unique" ON "_ProducerToVolumeSoldToProducer"("A", "B");

-- CreateIndex
CREATE INDEX "_ProducerToVolumeSoldToProducer_B_index" ON "_ProducerToVolumeSoldToProducer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ConsumerToVolumeSoldToProducer_AB_unique" ON "_ConsumerToVolumeSoldToProducer"("A", "B");

-- CreateIndex
CREATE INDEX "_ConsumerToVolumeSoldToProducer_B_index" ON "_ConsumerToVolumeSoldToProducer"("B");

-- AddForeignKey
ALTER TABLE "_VolumeToVolumeSoldToProducer" ADD CONSTRAINT "_VolumeToVolumeSoldToProducer_A_fkey" FOREIGN KEY ("A") REFERENCES "Volume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VolumeToVolumeSoldToProducer" ADD CONSTRAINT "_VolumeToVolumeSoldToProducer_B_fkey" FOREIGN KEY ("B") REFERENCES "VolumeSoldToProducer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProducerToVolumeSoldToProducer" ADD CONSTRAINT "_ProducerToVolumeSoldToProducer_A_fkey" FOREIGN KEY ("A") REFERENCES "Producer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProducerToVolumeSoldToProducer" ADD CONSTRAINT "_ProducerToVolumeSoldToProducer_B_fkey" FOREIGN KEY ("B") REFERENCES "VolumeSoldToProducer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConsumerToVolumeSoldToProducer" ADD CONSTRAINT "_ConsumerToVolumeSoldToProducer_A_fkey" FOREIGN KEY ("A") REFERENCES "Consumer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConsumerToVolumeSoldToProducer" ADD CONSTRAINT "_ConsumerToVolumeSoldToProducer_B_fkey" FOREIGN KEY ("B") REFERENCES "VolumeSoldToProducer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
