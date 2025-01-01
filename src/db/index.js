import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`\nMONGODB connected successfully! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error('MONGODB connection ERROR:', error.message);
    process.exit(1);
  }
};

export default connectDB;
