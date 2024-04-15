import  mongoose  from "mongoose";

export default async function connectMongoDB() {
try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connect to db");
    
} catch (error) {
    console.log("error connnect to mongodb", error.message);
}
}