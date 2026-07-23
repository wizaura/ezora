-- CreateEnum
CREATE TYPE "KeralaDistrict" AS ENUM ('THIRUVANANTHAPURAM', 'KOLLAM', 'PATHANAMTHITTA', 'ALAPPUZHA', 'KOTTAYAM', 'IDUKKI', 'ERNAKULAM', 'THRISSUR', 'PALAKKAD', 'MALAPPURAM', 'KOZHIKODE', 'WAYANAD', 'KANNUR', 'KASARAGOD');

-- CreateTable
CREATE TABLE "TourismGuide" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "district" "KeralaDistrict",
    "excerpt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "featuredImage" TEXT,
    "featuredImagePublicId" TEXT,
    "latitude" DECIMAL(65,30),
    "longitude" DECIMAL(65,30),
    "address" TEXT,
    "bestTimeToVisit" TEXT,
    "openingHours" TEXT,
    "entryFee" TEXT,
    "duration" TEXT,
    "mapUrl" TEXT,
    "tags" TEXT[],
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "seoTitle" TEXT,
    "seoDescription" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TourismGuide_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourismCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "icon" TEXT,
    "featuredImage" TEXT,
    "featuredImagePublicId" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TourismCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourismGuideImage" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "imagePublicId" TEXT NOT NULL,
    "alt" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "guideId" TEXT NOT NULL,

    CONSTRAINT "TourismGuideImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TourismGuide_slug_key" ON "TourismGuide"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "TourismCategory_slug_key" ON "TourismCategory"("slug");

-- AddForeignKey
ALTER TABLE "TourismGuide" ADD CONSTRAINT "TourismGuide_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "TourismCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourismGuideImage" ADD CONSTRAINT "TourismGuideImage_guideId_fkey" FOREIGN KEY ("guideId") REFERENCES "TourismGuide"("id") ON DELETE CASCADE ON UPDATE CASCADE;
