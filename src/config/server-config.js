import dotenv from 'dotenv';
dotenv.config();

export const ServerConfig={
    PORT:process.env.PORT,
    MONGO_CONNECT:process.env.MONGO_CONNECT,
    SALT_ROUND:process.env.SALT_ROUND,
    SECRET_KEY:process.env.SECRET_KEY,
    BUCKET:process.env.BUCKET,
    AWS_ACCESS_KEY:process.env.AWS_ACCESS_KEY,
    AWS_SECURE_ACCESS_KEY:process.env.AWS_SECURE_ACCESS_KEY
};