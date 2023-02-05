/*
  Warnings:

  - You are about to alter the column `rating` on the `Comment` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to drop the column `rating` on the `ShopItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "rating" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "ShopItem" DROP COLUMN "rating";
