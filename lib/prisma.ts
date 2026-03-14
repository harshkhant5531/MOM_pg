import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma";
import { Pool } from "pg";

const connectionString = `${process.env.DATABASE_URL}`;

// For PostgreSQL, we MUST use pg.Pool with the adapter to manage connections properly
// We also enable SSL for remote connections (like Render)
const pool = new Pool({ 
    connectionString,
    ssl: connectionString.includes('localhost') ? false : { rejectUnauthorized: false }
});

const adapter = new PrismaPg(pool as any);

const prismaClientSingleton = () => {
    return new PrismaClient({ 
        adapter: adapter as any,
        log: ["error", "warn"]
    });
};

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

export default prisma;