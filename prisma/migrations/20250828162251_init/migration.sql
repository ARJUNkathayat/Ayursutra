/*
  Warnings:

  - You are about to drop the column `phone` on the `Patient` table. All the data in the column will be lost.
  - Added the required column `phoneNumber` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Patient_phone_key";

-- AlterTable
ALTER TABLE "public"."Patient" DROP COLUMN "phone",
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ALTER COLUMN "medicalHistory" DROP NOT NULL;
