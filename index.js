const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log(`MongoDb is connected successfully`))
  .catch((err) => console.error(err));

const app = express();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// app.use(
//   cors({
//     origin: ["http://localhost:5000"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);
