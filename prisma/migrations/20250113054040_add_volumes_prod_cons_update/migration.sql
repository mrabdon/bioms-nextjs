-- AlterTable
ALTER TABLE "Consumer" ADD COLUMN     "volumeId" INTEGER;

-- AlterTable
ALTER TABLE "Producer" ADD COLUMN     "volumeId" INTEGER;

-- AddForeignKey
ALTER TABLE "Producer" ADD CONSTRAINT "Producer_volumeId_fkey" FOREIGN KEY ("volumeId") REFERENCES "Volume"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consumer" ADD CONSTRAINT "Consumer_volumeId_fkey" FOREIGN KEY ("volumeId") REFERENCES "Volume"("id") ON DELETE SET NULL ON UPDATE CASCADE;
