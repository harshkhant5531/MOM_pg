// import { PrismaMariaDb } from "@prisma/adapter-mariadb";
// import mariadb from "mariadb";
// import { PrismaClient } from "./generated/prisma/client";

// const prismaClientSingleton = () => {
//     const connectionString = process.env.DATABASE_URL;
//     if (!connectionString) {
//         throw new Error("DATABASE_URL is not defined");
//     }
//     console.log("Initializing Prisma with DATABASE_URL:", connectionString);
//     const adapter = new PrismaMariaDb(connectionString);

//     return new PrismaClient({
//         adapter,
//         log: ['query', 'error', 'warn'],
//     });
// };

// type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

// declare global {
//     var prisma: PrismaClientSingleton | undefined;
// }

// const prisma = globalThis.prisma ?? prismaClientSingleton();

// export default prisma;

// if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;

import { PrismaClient } from "./generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const prismaClientSingleton = () => {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
        throw new Error("DATABASE_URL is not defined");
    }

    console.log("Initializing Prisma with DATABASE_URL:", connectionString);

    const adapter = new PrismaMariaDb(connectionString);

    return new PrismaClient({
        adapter,
        log: ["query", "error", "warn"],
    });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

declare global {
    var prisma: PrismaClientSingleton | undefined;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = prisma;
}

export default prisma;
