import dotenv from 'dotenv';

dotenv.config();

const MYSQL_HOST = process.env.MYSQL_HOST || 'auth-db353.hostinger.com';
const MYSQL_USER = process.env.MYSQL_USER || 'u134026110_admin';
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || '@Admin007';
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'u134026110_thing';

const MYSQL = {
    host: MYSQL_HOST,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD
};

const SERVER_HOSTNAME = process.env.HOST || 'localhost';
const SERVER_PORT = process.env.PORT || 1337;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mysql: MYSQL,
    server: SERVER
};

export default config;
