import mongoose from "mongoose";

export const categoryColor = (category: string) => {
  switch (category) {
    case "SaaS":
      return "blue";
    case "AI":
      return "red";
    case "Gaming":
      return "green";
    case "FinTech":
      return "purple";
    case "HealthTech":
      return "pink";
    case "EdTech":
      return "purple";
    case "Security":
      return "orange";
    case "Crypto":
      return "yellow";
    case "Other":
      return "gray";
  }
};

interface Connection {
  isConnected: boolean;
}

const connection: Connection = { isConnected: false };

export const connectToDb = async (): Promise<void> => {
  try {
    if (connection.isConnected) {
      console.log("Using existing database connection");
      return;
    }

    const mongoUri = process.env.MONGODB;
    if (!mongoUri) {
      throw new Error("MongoDB connection string is not defined");
    }

    const db = await mongoose.connect(mongoUri);
    connection.isConnected = db.connections[0].readyState === 1;

    if (connection.isConnected) {
      console.log("Successfully connected to MongoDB");
    } else {
      console.warn("Failed to establish a stable connection to MongoDB");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};
