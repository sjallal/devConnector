// This is containing the connection logic b/w the mongoDB database and the mongoose which is the top
// layer of our database.
// Setting up some variables to use them globaly in default.json.//

// Connection with the database.
const mongoose = require("mongoose");

const config = require("config");
const db = config.get("mongoURI");

//later we'll be calling this fnc from server.js
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB CONNECTED....");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure.
    process.exit(1);
  }
};

module.exports = connectDB;
