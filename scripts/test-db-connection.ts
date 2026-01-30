
import prisma from '../lib/prisma';

async function main() {
    try {
        console.log('Attempting to connect to database...');
        // Try a simple query
        const count = await prisma.user.count();
        console.log(`Connection successful! found ${count} users.`);
        process.exit(0);
    } catch (error) {
        console.error('Connection failed:', error);
        process.exit(1);
    }
}

main();
