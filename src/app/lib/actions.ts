"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import db from "@/app/lib/utils";

export const submitStartup = async (formData: FormData) => {
  const name = formData.get("companyName");
  const description = formData.get("companyDescription");
  const category = formData.get("category");
  const location = formData.get("location");
  const logo = formData.get("logo");
  const applicationLink = formData.get("applicationLink");
  const jobDescription = formData.get("jobDescription");
  const tags = formData.get("tags");
  const jobRole = formData.get("jobRole");
  const remoteFriendly = formData.get("remoteFriendly");
  const email = formData.get("email");

  try {
    const startup = await db.startup.create({
      data: {
        companyName: name,
        createdAt: new Date(),
        companyDescription: description,
        category,
        location,
        logo,
        jobDescription,
        applicationLink,
        tags,
        jobRole,
        remoteFriendly,
        email,
      },
    });

    revalidatePath("/");
    redirect("/");

    return { success: true };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to submit startup");
  }
};
