import mongoose from "mongoose";

const connectMongoDb = async() => {
    try {
       await mongoose.connect(process.env.Mongo_DB_URI);
        console.log('Connected...')
    } catch (error) {
        console.log('Error connecting to MongoDB: ', error);
    }
}

export default connectMongoDb;