const mongoose = require("mongoose");
exports.connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb://localhost:27017"
    );
    console.log(`\nConnected to ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
};
