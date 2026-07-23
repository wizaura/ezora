/*
  Warnings:

  - Added the required column `publicId` to the `VehicleImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FleetCategory" ADD COLUMN     "featuredImagePublicId" TEXT;

-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "featuredImagePublicId" TEXT,
ADD COLUMN     "heroImagePublicId" TEXT;

-- AlterTable
ALTER TABLE "VehicleImage" ADD COLUMN     "publicId" TEXT NOT NULL;
