/*
  Warnings:

  - You are about to drop the column `createDate` on the `Volume` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Volume" DROP COLUMN "createDate",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
