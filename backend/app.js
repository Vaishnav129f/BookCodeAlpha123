const express = require("express");
const app = express();
const cors = require("cors");
const bookRoute = require("./routes/booksRoutes");
require("./connection/conn");
app.use(cors());
app.use(express.json());
app.use("/api/v1", bookRoute);

app.listen(1000, () => {
  console.log("SERVER STARTED SUCCESSFULLY");
});

require("dotenv").config(); // Load environment variables from .env file

// Your other imports and code here
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Your other code continues...

// const express = require("express");
// const app = express();
// const bookRoute = require("./routes/booksRoutes");
// require("./connection/conn");
// app.use("/api/v1", bookRoute);

// app.listen(1000, () => {
//   console.log("SERVER STARTED SUCCESSFULLY");
// });
