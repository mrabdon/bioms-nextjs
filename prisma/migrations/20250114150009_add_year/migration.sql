/*
  Warnings:

  - Added the required column `year` to the `Volume` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Volume" ADD COLUMN     "year" INTEGER NOT NULL;
