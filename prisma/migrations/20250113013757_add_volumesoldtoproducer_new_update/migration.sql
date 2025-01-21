/*
  Warnings:

  - You are about to drop the column `soldToId` on the `Volume` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Volume" DROP CONSTRAINT "Volume_producerId_fkey";

-- DropForeignKey
ALTER TABLE "Volume" DROP CONSTRAINT "Volume_soldToId_fkey";

-- AlterTable
ALTER TABLE "Volume" DROP COLUMN "soldToId",
ADD COLUMN     "consumerId" TEXT,
ALTER COLUMN "producerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Volume" ADD CONSTRAINT "Volume_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Volume" ADD CONSTRAINT "Volume_consumerId_fkey" FOREIGN KEY ("consumerId") REFERENCES "Consumer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
