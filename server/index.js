import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import entryRoute from "./routes/entries.js";
import routineRoute from "./routes/routines.js";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();
dotenv.config();

const PORT = process.env.PORT || 7700;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.get('/', (req, res) => { res.send('Hello from Express!') });

//middlewares
app.use(cookieParser())
app.use(express.json());
app.use(helmet());

// if(process.env.NODE_ENV === "development") {
//   app.use(cors({
//     origin: "http://localhost:3000",
//     credentials: true
//   }))
// } else {
//   app.use(cors({
//     origin: "https://paradive.netlify.app",
//     credentials: true
//   }))
// 

app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/entries", entryRoute);
app.use("/api/routines", routineRoute);

app.listen(PORT, () => {
  console.log("Listening on port 2000");
  connect();
});