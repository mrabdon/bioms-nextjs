/*
  Warnings:

  - You are about to drop the column `consumerId` on the `Volume` table. All the data in the column will be lost.
  - You are about to drop the column `producerId` on the `Volume` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Volume" DROP CONSTRAINT "Volume_consumerId_fkey";

-- DropForeignKey
ALTER TABLE "Volume" DROP CONSTRAINT "Volume_producerId_fkey";

-- AlterTable
ALTER TABLE "Volume" DROP COLUMN "consumerId",
DROP COLUMN "producerId";
