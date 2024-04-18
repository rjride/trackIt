import mongoose from "mongoose";

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB Connected successfully');
    } catch (error) {
        console.log('DB Connection Error');
    }
}

export default db;