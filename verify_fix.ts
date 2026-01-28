import 'dotenv/config';
import prisma from './lib/prisma';

async function main() {
    console.log('Successfully imported prisma client');
    try {
        await prisma.$connect();
        console.log('Successfully connected to the database via Prisma Adapter');
        await prisma.$disconnect();
    } catch (e) {
        console.error('Failed to connect:', e);
        process.exit(1);
    }
}

main();
