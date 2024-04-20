const mongoose = require("mongoose");
mongoose
  .connect(
    // process.env.MONGO_URI
    "mongodb+srv://vaishnavsrivastavamzp:Z3vDdRwnVucimCys@cluster0.tqlrqwb.mongodb.net/crudop?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((res) => console.log("Connected"));

// require("dotenv").config(); // Load environment variables from .env file

// // Your other imports and code here
// const mongoose = require("mongoose");

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));

// // Your other code continues...
