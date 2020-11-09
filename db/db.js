const mongoose = require("mongoose");
const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.log(err.message);

    //leave process if error
    process.exit(1);
  }
};

module.exports = connectDB;
