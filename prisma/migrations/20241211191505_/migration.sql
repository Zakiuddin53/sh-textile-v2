-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "orderNumber" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "sherwani" JSONB,
    "kurta" JSONB,
    "coat" JSONB,
    "sadri" JSONB,
    "shirt" JSONB,
    "trouser" JSONB,
    "pant" JSONB,
    "paejama" JSONB,
    "choodidarPaejama" JSONB,
    "shalwar" JSONB,
    "note" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_orderNumber_key" ON "Customer"("orderNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_name_phone_key" ON "Customer"("name", "phone");
