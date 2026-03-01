// Import using ES module syntax
import mongoose from "mongoose";

// Replace 'yourdbname' with your MongoDB database name
const mongoURI = "mongodb://127.0.0.1:27017/leave-management-system";

await mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schema and model
const AdminSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const Admin = mongoose.model("Admin", AdminSchema);

// Fetch all admins
const admins = await Admin.find();
console.log("Admins in DB:", admins);

mongoose.connection.close();
