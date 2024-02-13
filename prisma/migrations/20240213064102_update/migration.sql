/*
  Warnings:

  - The `active` column on the `Categories` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `active` column on the `Project_images` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `active` column on the `Projects` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `active` column on the `Services` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `active` column on the `Skills` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `active` column on the `Socials` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `active` column on the `Tools` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Categories" DROP COLUMN "active",
ADD COLUMN     "active" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Project_images" DROP COLUMN "active",
ADD COLUMN     "active" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Projects" DROP COLUMN "active",
ADD COLUMN     "active" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Services" DROP COLUMN "active",
ADD COLUMN     "active" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Skills" DROP COLUMN "active",
ADD COLUMN     "active" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Socials" DROP COLUMN "active",
ADD COLUMN     "active" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Tools" DROP COLUMN "active",
ADD COLUMN     "active" INTEGER NOT NULL DEFAULT 0;
