import mongoose, { ConnectOptions } from "mongoose";
// Import the dotenv library
require('dotenv').config({ path: '.env.test' });
import { logger } from "../util/logger";
export const connTestDb = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      autoIndex: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    // console.log(process.env.MONGO_URL)
    logger.info(`test Database Sighted : ${ conn.connection.host}`);
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};