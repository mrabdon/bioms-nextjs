/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `_ProducerToVolume` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Producer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `producerId` to the `Volume` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ProducerToUser" DROP CONSTRAINT "_ProducerToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProducerToVolume" DROP CONSTRAINT "_ProducerToVolume_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProducerToVolume" DROP CONSTRAINT "_ProducerToVolume_B_fkey";

-- DropForeignKey
ALTER TABLE "_UserToVolume" DROP CONSTRAINT "_UserToVolume_A_fkey";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AlterTable
ALTER TABLE "Volume" ADD COLUMN     "producerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "_ProducerToUser" ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_UserToVolume" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "_ProducerToVolume";

-- CreateIndex
CREATE UNIQUE INDEX "Producer_name_key" ON "Producer"("name");

-- AddForeignKey
ALTER TABLE "Volume" ADD CONSTRAINT "Volume_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToVolume" ADD CONSTRAINT "_UserToVolume_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProducerToUser" ADD CONSTRAINT "_ProducerToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
