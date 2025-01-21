/*
  Warnings:

  - You are about to drop the column `volumeId` on the `Consumer` table. All the data in the column will be lost.
  - You are about to drop the column `volumeId` on the `Producer` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Consumer" DROP CONSTRAINT "Consumer_volumeId_fkey";

-- DropForeignKey
ALTER TABLE "Producer" DROP CONSTRAINT "Producer_volumeId_fkey";

-- AlterTable
ALTER TABLE "Consumer" DROP COLUMN "volumeId";

-- AlterTable
ALTER TABLE "Producer" DROP COLUMN "volumeId";

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Announcement" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Announcement_pkey" PRIMARY KEY ("id")
);
