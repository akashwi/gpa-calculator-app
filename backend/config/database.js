import mongoose from "mongoose";
import "dotenv/config";

// Define your MongoDB connection URI (you can use an environment variable)
const MONGODB_URI = process.env.MONGODB_URI;

// Configure and create the Mongoose connection
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connection = mongoose.createConnection(MONGODB_URI, mongooseOptions);

// Listen for connection events (optional)
connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

// Export the Mongoose connection
export default connection;
