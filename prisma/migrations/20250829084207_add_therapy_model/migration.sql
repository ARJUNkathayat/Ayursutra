-- CreateTable
CREATE TABLE "public"."Therapy" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "durationMinutes" INTEGER NOT NULL,
    "precautions" TEXT,
    "image" TEXT,
    "category" TEXT,
    "benefits" TEXT NOT NULL,

    CONSTRAINT "Therapy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Therapy_name_key" ON "public"."Therapy"("name");
