-- CreateTable
CREATE TABLE "Volume" (
    "id" SERIAL NOT NULL,
    "datePeriod" TEXT NOT NULL,
    "committedVolume" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Volume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EmployeeToVolume" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Volume_datePeriod_key" ON "Volume"("datePeriod");

-- CreateIndex
CREATE UNIQUE INDEX "_EmployeeToVolume_AB_unique" ON "_EmployeeToVolume"("A", "B");

-- CreateIndex
CREATE INDEX "_EmployeeToVolume_B_index" ON "_EmployeeToVolume"("B");

-- AddForeignKey
ALTER TABLE "_EmployeeToVolume" ADD CONSTRAINT "_EmployeeToVolume_A_fkey" FOREIGN KEY ("A") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeToVolume" ADD CONSTRAINT "_EmployeeToVolume_B_fkey" FOREIGN KEY ("B") REFERENCES "Volume"("id") ON DELETE CASCADE ON UPDATE CASCADE;
