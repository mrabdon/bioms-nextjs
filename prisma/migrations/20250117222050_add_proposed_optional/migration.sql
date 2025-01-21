-- DropForeignKey
ALTER TABLE "Volume" DROP CONSTRAINT "Volume_producerId_fkey";

-- AlterTable
ALTER TABLE "Volume" ALTER COLUMN "producerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Volume" ADD CONSTRAINT "Volume_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
