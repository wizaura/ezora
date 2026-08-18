/*
  Warnings:

  - You are about to drop the column `corporateRate` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the column `standardRate` on the `Vehicle` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "CommercialTreatment" AS ENUM ('ACTUALS', 'INCLUDED', 'VENDOR', 'EZORA', 'CUSTOMER', 'NOT_APPLICABLE');

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "corporateRate",
DROP COLUMN "standardRate",
ADD COLUMN     "b2bBaseKm" INTEGER NOT NULL DEFAULT 100,
ADD COLUMN     "b2bBaseRate" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "b2bDriverBata" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "b2bExtraKmRate" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "b2bOvertimeRate" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "customerBaseKm" INTEGER NOT NULL DEFAULT 100,
ADD COLUMN     "customerBaseRate" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "customerDriverBata" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "customerExtraKmRate" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "customerOvertimeRate" DECIMAL(10,2) NOT NULL DEFAULT 350,
ADD COLUMN     "driverAccommodationTreatment" "CommercialTreatment" NOT NULL DEFAULT 'VENDOR',
ADD COLUMN     "dutyEndTime" TEXT NOT NULL DEFAULT '19:00',
ADD COLUMN     "dutyStartTime" TEXT NOT NULL DEFAULT '08:30',
ADD COLUMN     "ferryTreatment" "CommercialTreatment" NOT NULL DEFAULT 'ACTUALS',
ADD COLUMN     "fuelIncluded" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "parkingTreatment" "CommercialTreatment" NOT NULL DEFAULT 'ACTUALS',
ADD COLUMN     "tollTreatment" "CommercialTreatment" NOT NULL DEFAULT 'ACTUALS';
