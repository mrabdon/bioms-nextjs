/*
  Warnings:

  - The primary key for the `Consumer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `alias` on the `Consumer` table. All the data in the column will be lost.
  - You are about to drop the column `consumerId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_consumerId_fkey";

-- DropForeignKey
ALTER TABLE "_ConsumerToVolume" DROP CONSTRAINT "_ConsumerToVolume_A_fkey";

-- DropIndex
DROP INDEX "Consumer_alias_key";

-- DropIndex
DROP INDEX "Producer_name_key";

-- AlterTable
ALTER TABLE "Consumer" DROP CONSTRAINT "Consumer_pkey",
DROP COLUMN "alias",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Consumer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Consumer_id_seq";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "consumerId";

-- AlterTable
ALTER TABLE "_ConsumerToVolume" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "_ConsumerToVolume" ADD CONSTRAINT "_ConsumerToVolume_A_fkey" FOREIGN KEY ("A") REFERENCES "Consumer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
