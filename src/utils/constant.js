import { config } from "dotenv";

config();
export const secretKey = process.env.SECRET_KEY;
