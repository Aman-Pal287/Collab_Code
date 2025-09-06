const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

/* Routes */
const authRoutes = require("./routes/auth.routes");

const app = express();

/* using cors */
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

/* using middlewares */
app.use(express.json());
app.use(cookieParser());

/* Using Routes */
app.use("/auth", authRoutes);

module.exports = app;
