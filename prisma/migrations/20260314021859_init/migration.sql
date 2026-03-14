-- CreateEnum
CREATE TYPE "action_item_status" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED');

-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('ADMIN', 'CONVENER', 'STAFF');

-- CreateTable
CREATE TABLE "department" (
    "DepartmentID" SERIAL NOT NULL,
    "DepartmentName" VARCHAR(255) NOT NULL,
    "DepartmentCode" VARCHAR(50),
    "Created" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "Modified" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "department_pkey" PRIMARY KEY ("DepartmentID")
);

-- CreateTable
CREATE TABLE "meetingmember" (
    "MeetingMemberID" SERIAL NOT NULL,
    "MeetingID" INTEGER NOT NULL,
    "StaffID" INTEGER NOT NULL,
    "IsPresent" BOOLEAN DEFAULT false,
    "Remarks" VARCHAR(500),
    "Created" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "Modified" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "meetingmember_pkey" PRIMARY KEY ("MeetingMemberID")
);

-- CreateTable
CREATE TABLE "meetings" (
    "MeetingID" SERIAL NOT NULL,
    "MeetingDate" TIMESTAMP(0) NOT NULL,
    "MeetingTypeID" INTEGER NOT NULL,
    "VenueID" INTEGER,
    "MeetingDescription" VARCHAR(500),
    "DocumentPath" VARCHAR(500),
    "Created" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "Modified" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "IsCancelled" BOOLEAN DEFAULT false,
    "CancellationDateTime" TIMESTAMP(0),
    "CancellationReason" VARCHAR(500),

    CONSTRAINT "meetings_pkey" PRIMARY KEY ("MeetingID")
);

-- CreateTable
CREATE TABLE "meetingtype" (
    "MeetingTypeID" SERIAL NOT NULL,
    "MeetingTypeName" VARCHAR(255) NOT NULL,
    "Remarks" VARCHAR(500),
    "Created" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "Modified" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "meetingtype_pkey" PRIMARY KEY ("MeetingTypeID")
);

-- CreateTable
CREATE TABLE "staff" (
    "StaffID" SERIAL NOT NULL,
    "StaffName" VARCHAR(255) NOT NULL,
    "MobileNo" VARCHAR(20),
    "EmailAddress" VARCHAR(255),
    "DepartmentID" INTEGER,
    "Remarks" VARCHAR(500),
    "Created" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "Modified" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "staff_pkey" PRIMARY KEY ("StaffID")
);

-- CreateTable
CREATE TABLE "venue" (
    "VenueID" SERIAL NOT NULL,
    "VenueName" VARCHAR(255) NOT NULL,
    "Location" VARCHAR(500),
    "Capacity" INTEGER,
    "Created" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "Modified" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "venue_pkey" PRIMARY KEY ("VenueID")
);

-- CreateTable
CREATE TABLE "actionitem" (
    "ActionItemID" SERIAL NOT NULL,
    "MeetingID" INTEGER,
    "StaffID" INTEGER,
    "Description" VARCHAR(500) NOT NULL,
    "Status" "action_item_status" NOT NULL DEFAULT 'PENDING',
    "DueDate" TIMESTAMP(0),
    "Created" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "Modified" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "actionitem_pkey" PRIMARY KEY ("ActionItemID")
);

-- CreateTable
CREATE TABLE "user" (
    "id" VARCHAR(36) NOT NULL,
    "fullName" VARCHAR(100) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "phone" VARCHAR(20),
    "organization" VARCHAR(100),
    "password" VARCHAR(255) NOT NULL,
    "role" "user_role" DEFAULT 'STAFF',
    "createdAt" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_mm_meeting" ON "meetingmember"("MeetingID");

-- CreateIndex
CREATE INDEX "idx_mm_staff" ON "meetingmember"("StaffID");

-- CreateIndex
CREATE INDEX "idx_meeting_type" ON "meetings"("MeetingTypeID");

-- CreateIndex
CREATE INDEX "idx_meeting_venue" ON "meetings"("VenueID");

-- CreateIndex
CREATE INDEX "idx_staff_dept" ON "staff"("DepartmentID");

-- CreateIndex
CREATE INDEX "idx_action_meeting" ON "actionitem"("MeetingID");

-- CreateIndex
CREATE INDEX "idx_action_staff" ON "actionitem"("StaffID");

-- CreateIndex
CREATE UNIQUE INDEX "email" ON "user"("email");

-- AddForeignKey
ALTER TABLE "meetingmember" ADD CONSTRAINT "fk_mm_meeting" FOREIGN KEY ("MeetingID") REFERENCES "meetings"("MeetingID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meetingmember" ADD CONSTRAINT "fk_mm_staff" FOREIGN KEY ("StaffID") REFERENCES "staff"("StaffID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meetings" ADD CONSTRAINT "fk_meeting_type" FOREIGN KEY ("MeetingTypeID") REFERENCES "meetingtype"("MeetingTypeID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meetings" ADD CONSTRAINT "fk_meeting_venue" FOREIGN KEY ("VenueID") REFERENCES "venue"("VenueID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff" ADD CONSTRAINT "fk_staff_dept" FOREIGN KEY ("DepartmentID") REFERENCES "department"("DepartmentID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actionitem" ADD CONSTRAINT "fk_action_meeting" FOREIGN KEY ("MeetingID") REFERENCES "meetings"("MeetingID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actionitem" ADD CONSTRAINT "fk_action_staff" FOREIGN KEY ("StaffID") REFERENCES "staff"("StaffID") ON DELETE SET NULL ON UPDATE CASCADE;
