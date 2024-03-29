const mongoose = require("mongoose");
const URI = process.env.MONGO_URI;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(URI, connectionParams)
  .then(() => {
    console.log("[*] Connected to MongoDB");
  })
  .catch((err) => {
    console.error(``);
  });
