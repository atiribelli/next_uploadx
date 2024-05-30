import mariadb from 'mariadb';

declare global {  
    var pool: mariadb.Pool | undefined;  
    var poolClienti: mariadb.Pool | undefined;
}  

export const pool = globalThis.pool || mariadb.createPool({
    charset: 'utf8mb4',
    connectionLimit: Number(process.env.CONNECTION_LIMIT),
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

export const poolClienti = globalThis.poolClienti || mariadb.createPool({
    charset: 'utf8mb4',
    connectionLimit: Number(process.env.CONNECTION_LIMIT),
    host: process.env.DB_HOST_CLIENTI,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});