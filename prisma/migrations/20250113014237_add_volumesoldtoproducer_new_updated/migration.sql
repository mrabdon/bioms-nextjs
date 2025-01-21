/*
  Warnings:

  - You are about to drop the column `consumerId` on the `Volume` table. All the data in the column will be lost.
  - You are about to drop the column `producerId` on the `Volume` table. All the data in the column will be lost.
  - Added the required column `consumerId` to the `VolumeSoldToProducer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Volume" DROP CONSTRAINT "Volume_consumerId_fkey";

-- DropForeignKey
ALTER TABLE "Volume" DROP CONSTRAINT "Volume_producerId_fkey";

-- AlterTable
ALTER TABLE "Volume" DROP COLUMN "consumerId",
DROP COLUMN "producerId";

-- AlterTable
ALTER TABLE "VolumeSoldToProducer" ADD COLUMN     "consumerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "VolumeSoldToProducer" ADD CONSTRAINT "VolumeSoldToProducer_consumerId_fkey" FOREIGN KEY ("consumerId") REFERENCES "Consumer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
