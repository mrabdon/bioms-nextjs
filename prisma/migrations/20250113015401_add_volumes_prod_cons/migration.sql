-- AlterTable
ALTER TABLE "Volume" ADD COLUMN     "consumerId" TEXT,
ADD COLUMN     "producerId" TEXT;

-- AddForeignKey
ALTER TABLE "Volume" ADD CONSTRAINT "Volume_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Volume" ADD CONSTRAINT "Volume_consumerId_fkey" FOREIGN KEY ("consumerId") REFERENCES "Consumer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
