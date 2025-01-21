-- CreateTable
CREATE TABLE "ActualProduce" (
    "id" SERIAL NOT NULL,
    "actualProduction" INTEGER,
    "month" TIMESTAMP(3) NOT NULL,
    "volumeId" INTEGER,

    CONSTRAINT "ActualProduce_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ActualProduce" ADD CONSTRAINT "ActualProduce_volumeId_fkey" FOREIGN KEY ("volumeId") REFERENCES "Volume"("id") ON DELETE SET NULL ON UPDATE CASCADE;
