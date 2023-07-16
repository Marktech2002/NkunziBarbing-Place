import mongoose from "mongoose";
export const connectDb = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL );
    console.log(`Database Sighted : ${conn.connection.host}`); 
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
