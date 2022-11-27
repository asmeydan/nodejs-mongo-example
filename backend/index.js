import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/users.js';

//? PORTU BELİRTİR
const PORT = 5000;
const app = express();

//? GELEN VERİLERİ OBJE OLARAK ALMAMIZI SAĞLAR
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//? http://localhost:5000/
app.get("/", async (req, res)=> {
  res.json({
    message: "asmeydan"
  });
})

//? http://localhost:5000/users
app.use("/users", userRoutes);

//! MONGODB BAĞLANTI
mongoose.connect("mongodb://127.0.0.1:27017/test", {
  useNewUrlParser: true
}).then(()=> {
  app.listen(PORT, ()=> {
    console.log("server is running")
  })
}).catch((error)=> {
  console.log(error.message)
})