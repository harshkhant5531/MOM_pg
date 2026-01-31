const mariadb = require('mariadb');
require('dotenv').config();

async function main() {
    console.log("Testing direct MariaDB connection...");
    try {
        const dbUrl = process.env.DATABASE_URL;
        if (!dbUrl) throw new Error("DATABASE_URL not found");

        const url = new URL(dbUrl);
        console.log(`Debug URL Password: ${url.password}`);

        const pool = mariadb.createPool({
            host: url.hostname,
            port: parseInt(url.port) || 3306,
            user: url.username,
            password: url.password,
            database: url.pathname.slice(1),
            allowPublicKeyRetrieval: true
        });

        const conn = await pool.getConnection();
        console.log("Successfully retrieved connection from pool!");

        const rows = await conn.query("SELECT 1 as val");
        console.log("Query successful:", rows);

        conn.release(); // release to pool
        await pool.end();
        console.log("Pool closed.");
    } catch (err) {
        console.error("Connection failed:");
        console.dir(err);
    }
}

main();
