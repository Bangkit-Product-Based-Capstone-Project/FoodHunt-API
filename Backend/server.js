import express from "express";
import FileUpload from "express-fileupload";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import database from "./config/Database.js";
import router from "./routes/Userroutes.js";
import ArtikelRouter from "./routes/ArtikelRoutes.js";
dotenv.config();
const app = express();

try {
  await database.authenticate();
  console.log("Database connection successful");
} catch (error) {
  console.error(error);
}
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(router);
app.use(ArtikelRouter);

app.listen(5000, () => console.log("listening on port", 4000));
