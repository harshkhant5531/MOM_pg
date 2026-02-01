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
    revalidatePath("/convener/config/staff");
    revalidatePath("/staff/config/staff");
    return staff;
}

export async function updateStaff(id: number, data: any) {
    const staff = await prisma.staff.update({
        where: { StaffID: id },
        data: {
            StaffName: data.name,
            EmailAddress: data.email,
            MobileNo: data.mobile,
            DepartmentID: data.departmentId ? parseInt(data.departmentId) : null,
            Remarks: data.remarks
        }
    });
    revalidatePath("/admin/master-config/staff");
    revalidatePath("/convener/config/staff");
    revalidatePath("/staff/config/staff");
    return staff;
}

export async function deleteStaff(id: number) {
    await prisma.staff.delete({ where: { StaffID: id } });
    revalidatePath("/admin/master-config/staff");
    revalidatePath("/convener/config/staff");
    revalidatePath("/staff/config/staff");
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
    revalidatePath("/convener/config/departments");
    revalidatePath("/staff/config/departments");
    return dept;
}

export async function updateDepartment(id: number, data: any) {
    const dept = await prisma.department.update({
        where: { DepartmentID: id },
        data: {
            DepartmentName: data.name,
            DepartmentCode: data.code
        }
    });
    revalidatePath("/admin/master-config/departments");
    revalidatePath("/convener/config/departments");
    revalidatePath("/staff/config/departments");
    return dept;
}

export async function deleteDepartment(id: number) {
    await prisma.department.delete({ where: { DepartmentID: id } });
    revalidatePath("/admin/master-config/departments");
    revalidatePath("/convener/config/departments");
    revalidatePath("/staff/config/departments");
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
    revalidatePath("/convener/config/venues");
    revalidatePath("/staff/config/venues");
    return venue;
}

export async function updateVenue(id: number, data: any) {
    const venue = await prisma.venue.update({
        where: { VenueID: id },
        data: {
            VenueName: data.name,
            Location: data.location,
            Capacity: data.capacity ? parseInt(data.capacity) : null
        }
    });
    revalidatePath("/admin/master-config/venues");
    revalidatePath("/convener/config/venues");
    revalidatePath("/staff/config/venues");
    return venue;
}

export async function deleteVenue(id: number) {
    await prisma.venue.delete({ where: { VenueID: id } });
    revalidatePath("/admin/master-config/venues");
    revalidatePath("/convener/config/venues");
    revalidatePath("/staff/config/venues");
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
    revalidatePath("/convener/config/meeting-types");
    revalidatePath("/staff/config/meeting-types");
    return type;
}

export async function updateMeetingType(id: number, data: any) {
    const type = await prisma.meetingtype.update({
        where: { MeetingTypeID: id },
        data: {
            MeetingTypeName: data.name,
            Remarks: data.remarks
        }
    });
    revalidatePath("/admin/master-config/meeting-types");
    revalidatePath("/convener/config/meeting-types");
    revalidatePath("/staff/config/meeting-types");
    return type;
}

export async function deleteMeetingType(id: number) {
    await prisma.meetingtype.delete({ where: { MeetingTypeID: id } });
    revalidatePath("/admin/master-config/meeting-types");
    revalidatePath("/convener/config/meeting-types");
    revalidatePath("/staff/config/meeting-types");
}
