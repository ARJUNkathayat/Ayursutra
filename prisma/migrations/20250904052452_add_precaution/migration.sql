/*
  Warnings:

  - You are about to drop the column `precautions` on the `Therapy` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."PrecautionType" AS ENUM ('PRE_KARMA', 'POST_KARMA');

-- AlterTable
ALTER TABLE "public"."Therapy" DROP COLUMN "precautions";

-- CreateTable
CREATE TABLE "public"."Precaution" (
    "id" SERIAL NOT NULL,
    "therapyId" INTEGER NOT NULL,
    "type" "public"."PrecautionType" NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Precaution_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Precaution" ADD CONSTRAINT "Precaution_therapyId_fkey" FOREIGN KEY ("therapyId") REFERENCES "public"."Therapy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
