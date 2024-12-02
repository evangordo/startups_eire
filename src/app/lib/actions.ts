"use server";
import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_SECRET_KEY || ""
);

import db from "@/app/lib/utils";

export const submitStartup = async (formData: FormData) => {
  const name = formData.get("companyName");
  const description = formData.get("companyDescription");
  const category = formData.get("category");
  const location = formData.get("location");
  const logo = formData.get("logo");
  const applicationLink = formData.get("applicationLink");
  const jobDescription = formData.get("jobDescription");
  const tags = JSON.parse(formData.get("tags") as string);
  const jobRole = formData.get("jobRole");
  const remoteFriendly = formData.get("remoteFriendly");
  const email = formData.get("email");

  try {
    const logoUrl = await uploadFile(logo as File);

    const startup = await db.startup.create({
      data: {
        companyName: name,
        createdAt: new Date(),
        companyDescription: description,
        category,
        location,

        jobDescription,
        applicationLink,
        tags,
        jobRole,
        remoteFriendly,
        email,
        logo: logoUrl,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Detailed error:", {
      error,
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    });

    throw new Error(
      `Failed to submit startup: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

async function uploadFile(file: File) {
  try {
    const timestamp = Date.now();
    const uniqueFileName = `${timestamp}-${file.name}`;

    const { data, error } = await supabase.storage
      .from("StartupsEire")
      .upload(`logos/${uniqueFileName}`, file, {
        cacheControl: "3600",
        upsert: true,
      });

    if (error) {
      console.error("Error uploading file:", error);
      throw new Error("Failed to upload logo");
    }

    const {
      data: { publicUrl },
    } = supabase.storage
      .from("StartupsEire")
      .getPublicUrl(`logos/${uniqueFileName}`);
    return publicUrl;
  } catch (error) {
    console.error("Error in uploadFile:", error);
    throw new Error("Failed to upload logo");
  }
}
