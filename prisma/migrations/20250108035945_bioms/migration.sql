-- CreateEnum
CREATE TYPE "UserGender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('admin', 'producer', 'staff');

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "img" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "consumerId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Volume" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "committedVolume" INTEGER NOT NULL,
    "actualProduction" INTEGER NOT NULL,
    "begInventory" INTEGER NOT NULL,
    "totalStock" INTEGER NOT NULL,
    "sold" INTEGER NOT NULL,
    "soldTo" TEXT NOT NULL,
    "unsold" INTEGER NOT NULL,

    CONSTRAINT "Volume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Producer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consumer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Consumer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserToVolume" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ProducerToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProducerToVolume" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ConsumerToVolume" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Producer_name_key" ON "Producer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Producer_alias_key" ON "Producer"("alias");

-- CreateIndex
CREATE UNIQUE INDEX "Consumer_name_key" ON "Consumer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Consumer_alias_key" ON "Consumer"("alias");

-- CreateIndex
CREATE UNIQUE INDEX "_UserToVolume_AB_unique" ON "_UserToVolume"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToVolume_B_index" ON "_UserToVolume"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProducerToUser_AB_unique" ON "_ProducerToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ProducerToUser_B_index" ON "_ProducerToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProducerToVolume_AB_unique" ON "_ProducerToVolume"("A", "B");

-- CreateIndex
CREATE INDEX "_ProducerToVolume_B_index" ON "_ProducerToVolume"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ConsumerToVolume_AB_unique" ON "_ConsumerToVolume"("A", "B");

-- CreateIndex
CREATE INDEX "_ConsumerToVolume_B_index" ON "_ConsumerToVolume"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_consumerId_fkey" FOREIGN KEY ("consumerId") REFERENCES "Consumer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToVolume" ADD CONSTRAINT "_UserToVolume_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToVolume" ADD CONSTRAINT "_UserToVolume_B_fkey" FOREIGN KEY ("B") REFERENCES "Volume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProducerToUser" ADD CONSTRAINT "_ProducerToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Producer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProducerToUser" ADD CONSTRAINT "_ProducerToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProducerToVolume" ADD CONSTRAINT "_ProducerToVolume_A_fkey" FOREIGN KEY ("A") REFERENCES "Producer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProducerToVolume" ADD CONSTRAINT "_ProducerToVolume_B_fkey" FOREIGN KEY ("B") REFERENCES "Volume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConsumerToVolume" ADD CONSTRAINT "_ConsumerToVolume_A_fkey" FOREIGN KEY ("A") REFERENCES "Consumer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConsumerToVolume" ADD CONSTRAINT "_ConsumerToVolume_B_fkey" FOREIGN KEY ("B") REFERENCES "Volume"("id") ON DELETE CASCADE ON UPDATE CASCADE;
