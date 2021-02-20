import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import expressValidator from "express-validator";
import colors from "colors";

// import routes
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";

// app
const app = express();

// this function connects us to the DB!!!
connectDB();

//   middlewares
app.use(morgan("dev")); //log requests to console
app.use(bodyParser.json()); //Get json data from req.body
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", productRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`.bgYellow.black.bold);
});
