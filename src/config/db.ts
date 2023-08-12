import mongoose, { ConnectOptions } from "mongoose";
export const connectDb = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      autoIndex: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log(`Database Sighted : ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
