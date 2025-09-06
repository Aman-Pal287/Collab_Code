const mongoose = require("mongoose");

function connectToDb() {
  try {
    mongoose.connect(process.env.MONGO_URL).then(() => {
      console.log("Connected to DataBase");
    });
  } catch (error) {
    console.log(`DataBase Connection error : `, err);
  }
}

module.exports = connectToDb;
