/*
  Warnings:

  - A unique constraint covering the columns `[shopItemId]` on the table `File` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "File_shopItemId_key" ON "File"("shopItemId");
