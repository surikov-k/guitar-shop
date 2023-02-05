/*
  Warnings:

  - You are about to drop the column `guitarId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the `Guitar` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "GuitarType" AS ENUM ('Electric', 'Acoustic', 'Ukulele');

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_guitarId_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "guitarId",
ADD COLUMN     "shopItemId" INTEGER;

-- DropTable
DROP TABLE "Guitar";

-- CreateTable
CREATE TABLE "ShopItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "photo" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "stringsNumber" INTEGER NOT NULL,
    "rating" DECIMAL(65,30) NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "ShopItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_shopItemId_fkey" FOREIGN KEY ("shopItemId") REFERENCES "ShopItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
