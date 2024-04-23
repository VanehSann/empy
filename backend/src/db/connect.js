import mongoose from "mongoose";
import "dotenv/config";

const main = async () => {
  try {
    mongoose.set("strictQuery", true)
    await mongoose.connect(process.env.MONGO_URI, { dbName: "empy" });
    console.log('DB Connected!')
  } catch (error) {
    console.log(`Erro: ${error}`)
  };
};

export default main;