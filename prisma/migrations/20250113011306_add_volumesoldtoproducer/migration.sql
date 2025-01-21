-- CreateTable
CREATE TABLE "VolumeSoldToProducer" (
    "id" SERIAL NOT NULL,
    "volumeId" INTEGER NOT NULL,
    "producerId" TEXT NOT NULL,
    "soldAmount" INTEGER NOT NULL,
    "mc" INTEGER NOT NULL,
    "mro" INTEGER NOT NULL,

    CONSTRAINT "VolumeSoldToProducer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VolumeSoldToProducer" ADD CONSTRAINT "VolumeSoldToProducer_volumeId_fkey" FOREIGN KEY ("volumeId") REFERENCES "Volume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VolumeSoldToProducer" ADD CONSTRAINT "VolumeSoldToProducer_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
