import { Startup, Events } from "./models";
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

export const getAllEvents = async () => {
  try {
    connectToDb();
    const events = await Events.find();

    return events;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch events");
  }
};
