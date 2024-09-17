import mongoose from "mongoose";

const startupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
    },
    description: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
    },
    jobSite: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
    },
    logo: {
      type: String,
    },
    category: {
      type: String,
      enum: [
        "Software ",
        "Hardware",
        "AI",
        "SaaS",
        "Gaming",
        "Education",
        "FinTech",
        "HealthTech",
        "EdTech",
        "Security",
        "Crypto",
        "Other",
      ],
      required: true,
    },

    social: {
      type: String,
      maxlength: 50,
    },
  },
  { timestamps: true }
);
export const Startup =
  mongoose.models?.Startup || mongoose.model("Startup", startupSchema);
