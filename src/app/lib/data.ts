import { Startup } from "./models";
import { connectToDb } from "./utils";

export const getAllStartups = async () => {
  try {
    connectToDb();
    const startups = await Startup.find();

    return startups;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch startups");
  }
};
