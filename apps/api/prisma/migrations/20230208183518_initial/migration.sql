-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_shopItemId_fkey";

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_shopItemId_fkey" FOREIGN KEY ("shopItemId") REFERENCES "ShopItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
