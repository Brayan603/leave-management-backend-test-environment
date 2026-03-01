import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Admin from "./models/Admin.js";

const mongoURI = "mongodb://127.0.0.1:27017/leave-management-system";

await mongoose.connect(mongoURI);

const admin = await Admin.findOne({ email: "admin@example.com" });
if (!admin) {
  console.log("No admin found");
  process.exit();
}

const plainPassword = "admin123"; // the password you try in frontend

const isMatch = await bcrypt.compare(plainPassword, admin.password);
console.log("Password match?", isMatch);

mongoose.connection.close();
