import dotenv from 'dotenv';
dotenv.config();

export const ServerConfig={
    PORT:process.env.PORT,
    MONGO_CONNECT:process.env.MONGO_CONNECT
};