import express from 'express';
import userRouters from './routes/user.route.js';
import exploreRoutes from './routes/explore.router.js'
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();
const app=express();
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Server Activate");
})

app.use("/api/users",userRouters);
app.use("/api/explore",exploreRoutes);

app.listen(5000,()=>{
    console.log("server started on http://localhost:5000");
})