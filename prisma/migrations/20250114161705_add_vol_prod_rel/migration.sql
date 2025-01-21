/*
  Warnings:

  - Added the required column `producerId` to the `Volume` table without a default value. This is not possible if the table is not empty.
  - Made the column `actualProduceDate` on table `Volume` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Volume" ADD COLUMN     "producerId" TEXT NOT NULL,
ALTER COLUMN "proposedVolume" DROP NOT NULL,
ALTER COLUMN "quarter" DROP NOT NULL,
ALTER COLUMN "year" DROP NOT NULL,
ALTER COLUMN "actualProduceDate" SET NOT NULL,
ALTER COLUMN "actualProduceDate" SET DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Volume" ADD CONSTRAINT "Volume_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
