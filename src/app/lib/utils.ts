import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  let prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const db = (globalThis as any).prisma ?? prismaClientSingleton();

export default db;

if (process.env.NODE_ENV !== "production") {
  (globalThis as any).prisma = db;
}
