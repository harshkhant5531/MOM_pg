"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// --- Staff Actions ---
export async function getStaff() {
    return await prisma.staff.findMany({
        include: { department: true },
        orderBy: { StaffName: 'asc' }
    });
}

export async function createStaff(data: any) {
    const staff = await prisma.staff.create({
        data: {
            StaffName: data.name,
            EmailAddress: data.email,
            MobileNo: data.mobile,
            DepartmentID: data.departmentId ? parseInt(data.departmentId) : null,
            Remarks: data.remarks
        }
    });
    revalidatePath("/admin/master-config/staff");
    return staff;
}

export async function deleteStaff(id: number) {
    await prisma.staff.delete({ where: { StaffID: id } });
    revalidatePath("/admin/master-config/staff");
}

// --- Department Actions ---
export async function getDepartments() {
    return await prisma.department.findMany({
        orderBy: { DepartmentName: 'asc' }
    });
}

export async function createDepartment(data: any) {
    const dept = await prisma.department.create({
        data: {
            DepartmentName: data.name,
            DepartmentCode: data.code
        }
    });
    revalidatePath("/admin/master-config/departments");
    return dept;
}

export async function deleteDepartment(id: number) {
    await prisma.department.delete({ where: { DepartmentID: id } });
    revalidatePath("/admin/master-config/departments");
}

// --- Venue Actions ---
export async function getVenues() {
    return await prisma.venue.findMany({
        orderBy: { VenueName: 'asc' }
    });
}

export async function createVenue(data: any) {
    const venue = await prisma.venue.create({
        data: {
            VenueName: data.name,
            Location: data.location,
            Capacity: data.capacity ? parseInt(data.capacity) : null
        }
    });
    revalidatePath("/admin/master-config/venues");
    return venue;
}

export async function deleteVenue(id: number) {
    await prisma.venue.delete({ where: { VenueID: id } });
    revalidatePath("/admin/master-config/venues");
}

// --- Meeting Type Actions ---
export async function getMeetingTypes() {
    return await prisma.meetingtype.findMany({
        orderBy: { MeetingTypeName: 'asc' }
    });
}

export async function createMeetingType(data: any) {
    const type = await prisma.meetingtype.create({
        data: {
            MeetingTypeName: data.name,
            Remarks: data.remarks
        }
    });
    revalidatePath("/admin/master-config/meeting-types");
    return type;
}

export async function deleteMeetingType(id: number) {
    await prisma.meetingtype.delete({ where: { MeetingTypeID: id } });
    revalidatePath("/admin/master-config/meeting-types");
}
