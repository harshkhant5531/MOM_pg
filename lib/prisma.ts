// import { PrismaMariaDb } from "@prisma/adapter-mariadb";
// import mariadb from "mariadb";
// import { PrismaClient } from "./generated/prisma/client";
// require("dotenv").config();
// const prismaClientSingleton = () => {
//     const connectionString = process.env.DATABASE_URL;
//     console.log(connectionString);
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



// ---->Working Mysql


// import { PrismaMariaDb } from "@prisma/adapter-mariadb";
// import { PrismaClient } from "./generated/prisma";


// const prismaClientSingleton = () => {
//     const databaseUrl = process.env.DATABASE_URL;

//     if (!databaseUrl) {
//         throw new Error("DATABASE_URL is not defined");
//     }


//     const url = new URL(databaseUrl);
//     const databaseName = url.pathname.slice(1);

//     const adapter = new PrismaMariaDb({
//         host: url.hostname,
//         port: parseInt(url.port) || 3306,
//         user: decodeURIComponent(url.username),
//         password: decodeURIComponent(url.password),
//         connectionLimit: 10,
//         allowPublicKeyRetrieval: true
//     }, {
//         database: decodeURIComponent(databaseName)
//     });


//     return new PrismaClient({
//         adapter,
//         log: ["error", "warn"],
//     });
// };


// type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

// declare global {
//     var prisma_v3: PrismaClientSingleton | undefined;
// }

// const prisma = globalThis.prisma_v3 ?? prismaClientSingleton();

// if (process.env.NODE_ENV !== "production") {
//     globalThis.prisma_v3 = prisma;
// }

// export default prisma;


// ----->postgresql

import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../lib/generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export default prisma;