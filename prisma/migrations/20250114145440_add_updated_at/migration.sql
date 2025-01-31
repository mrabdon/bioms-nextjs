/*
  Warnings:

  - You are about to drop the column `date` on the `Volume` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Volume` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Volume" DROP COLUMN "date",
ADD COLUMN     "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
