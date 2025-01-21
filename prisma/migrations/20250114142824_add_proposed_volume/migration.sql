/*
  Warnings:

  - Added the required column `proposedVolume` to the `Volume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quarter` to the `Volume` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Volume" ADD COLUMN     "proposedVolume" INTEGER NOT NULL,
ADD COLUMN     "quarter" TEXT NOT NULL;
