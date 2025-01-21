/*
  Warnings:

  - You are about to drop the column `soldTo` on the `Volume` table. All the data in the column will be lost.
  - You are about to drop the `_ConsumerToVolume` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `soldToId` to the `Volume` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ConsumerToVolume" DROP CONSTRAINT "_ConsumerToVolume_A_fkey";

-- DropForeignKey
ALTER TABLE "_ConsumerToVolume" DROP CONSTRAINT "_ConsumerToVolume_B_fkey";

-- AlterTable
ALTER TABLE "Volume" DROP COLUMN "soldTo",
ADD COLUMN     "soldToId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_ConsumerToVolume";

-- AddForeignKey
ALTER TABLE "Volume" ADD CONSTRAINT "Volume_soldToId_fkey" FOREIGN KEY ("soldToId") REFERENCES "Consumer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
