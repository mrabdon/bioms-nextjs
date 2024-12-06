"use server";

import { revalidatePath } from "next/cache";
import {
  ProducerSchema,
  SubjectSchema,
  UserSchema,
  VolumeSchema,
} from "./formValidationSchemas";
import prisma from "./prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";
import bcrypt from "bcrypt";

type CurrentState = { success: boolean; error: boolean };
//SUBJECTS
export const createSubject = async (
  currentState: CurrentState,
  data: SubjectSchema
) => {
  try {
    await prisma.subject.create({
      data: {
        name: data.name,
        teachers: {
          connect: data.teachers.map((teacherId) => ({ id: teacherId })),
        },
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateSubject = async (
  currentState: CurrentState,
  data: SubjectSchema
) => {
  try {
    await prisma.subject.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteSubject = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await prisma.subject.delete({
      where: {
        id: parseInt(id),
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

//VOLUMES
export const createVolume = async (
  currentState: CurrentState,
  data: VolumeSchema
) => {
  try {
    await prisma.volume.create({
      data: {
        date: new Date(),
        committedVolume: data.committedVolume,
        actualProduction: data.committedVolume,
        begInventory: data.committedVolume,
        totalStock: data.committedVolume,
        sold: data.committedVolume,
        unsold: data.committedVolume,
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateVolume = async (
  currentState: CurrentState,
  data: VolumeSchema
) => {
  try {
    await prisma.volume.update({
      where: {
        id: data.id,
      },
      data: {
        committedVolume: data.committedVolume,
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteVolume = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await prisma.volume.delete({
      where: {
        id: parseInt(id),
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

//PRODUCERS
export const createProducer = async (
  currentState: CurrentState,
  data: ProducerSchema
) => {
  try {
    await prisma.producer.create({
      data: {
        id: data.id,
        name: data.name,
        createdAt: new Date(),
      },
    });

    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateProducer = async (
  currentState: CurrentState,
  data: ProducerSchema
) => {
  try {
    await prisma.producer.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
      },
    });

    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteProducer = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await prisma.producer.delete({
      where: {
        id: parseInt(id),
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};
//===============================USERS ===========================================

const createUserWithTempPassword = async (
  currentState: CurrentState,
  data: UserSchema
) => {
  const tempPassword = Math.random().toString(36).slice(-8); // Generate a simple temporary password

  const user = await clerkClient.users.createUser({
    emailAddress: [data.email],
    password: tempPassword,
    publicMetadata: { requiresPasswordChange: true }, // Flag for password change
  });

  console.log(`Temporary password for ${data.email}: ${tempPassword}`);
  return user;
};

export const createUser = async (
  currentState: CurrentState,
  data: UserSchema
) => {
  try {
    const user = await clerkClient.users.createUser({
      username: data.username,
      password: data.password,
      firstName: data.name,
      lastName: data.surname,
      publicMetadata: {
        role: data.role, // Example of adding role to public metadata
      },
    });

    await prisma.user.create({
      data: {
        id: user.id,
        name: data.name,
        username: data.username,
        surname: data.surname,
        email: data.email,
        phone: data.phone || null,
        address: data.address,
        img: data.img || null,
        gender: data.gender,
        role: data.role,
        producers: {
          connect: data.producers?.map((producerId: string) => ({
            id: parseInt(producerId),
          })),
        },
      },
    });

    // revalidatePath("/list/class");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateUser = async (
  currentState: CurrentState,
  data: UserSchema
) => {
  if (!data.id) {
    return { success: false, error: true };
  }
  try {
    // if (data.password) {
    //   // Hash the password before sending it to Clerk
    //   const hashedPassword = await bcrypt.hash(data.password, 10);
    //   await clerkClient.users.updateUser(data.id, {
    //     username: data.username,
    //     password: hashedPassword, // Send the hashed password to Clerk
    //     firstName: data.name,
    //     lastName: data.surname,
    //   });
    // } else {
    // const user = await clerkClient.users.updateUser(data.id, {
    //   username: data.username,
    //   ...(data.password !== "" && { password: data.password }),
    //   firstName: data.name,
    //   lastName: data.surname,
    // });
    await clerkClient.users.updateUser(data.id, {
      username: data.username,
      password: data.password || undefined, // Ensure password is plain text
      firstName: data.name,
      lastName: data.surname,
    });

    // Hash the password if provided
    // const hashedPassword = data.password
    //   ? await bcrypt.hash(data.password, 10)
    //   : undefined;

    await prisma.user.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        username: data.username,
        surname: data.surname,
        email: data.email,
        phone: data.phone || null,
        address: data.address,
        img: data.img || null,
        gender: data.gender,
        role: data.role,
        producers: {
          set: data.producers?.map((producerId: string) => ({
            id: parseInt(producerId),
          })),
        },
      },
    });

    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteUser = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await clerkClient.users.deleteUser(id);

    await prisma.user.delete({
      where: {
        id: id,
      },
    });

    // revalidatePath("/list/teachers");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};
