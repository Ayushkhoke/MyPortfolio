const mongoose = require("mongoose");

exports.connect = async () => {
  try {
    await mongoose.connect(process.env.BASE_URL);
    console.log("database connection successful");
  } catch (error) {
    console.error("error connecting to database:", error.message);
    process.exit(1);
  }
};
