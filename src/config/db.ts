import mongoose, { ConnectOptions } from "mongoose";
import { logger } from "../util/logger";
export const connectDb = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      autoIndex: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    logger.info(`Database Sighted : ${conn.connection.host}`);
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};
