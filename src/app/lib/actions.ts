"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Startup } from "./models";
import { connectToDb } from "./utils";

// import { Resend } from "resend";
// import EmailTemplate from "@/email/welcome";

export const submitStartup = async (formData: FormData) => {
  const name = formData.get("companyName");
  const description = formData.get("description");
  const founded = formData.get("founded");
  const category = formData.get("category");
  const jobs = formData.get("jobs");
  const linkedin = formData.get("linkedin");
  const twitter = formData.get("twitter");
  const location = formData.get("location");

  try {
    connectToDb();
    const startup = await Startup.create({
      name,
      description,
      founded,
      category,
      jobs,
      linkedin,
      twitter,
      location,
    });

    revalidatePath("/");
    redirect("/");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to submit startup");
  }
};
