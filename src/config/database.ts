import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mi_base";

export const databaseConnect  = ()=>{
    mongoose
    .connect(MONGO_URI)
    .then(() => console.log("✅ Conectado a MongoDB", MONGO_URI))
    .catch((err) => console.error("❌ Error al conectar a MongoDB:", err));
}

export default mongoose;