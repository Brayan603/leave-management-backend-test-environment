import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Admin from "./models/Admin.js";

await mongoose.connect("mongodb://127.0.0.1:27017/leave-management-system");

console.log("Connected to DB");

// ❌ delete duplicates
await Admin.deleteMany({});
console.log("All admins deleted");

// ✅ create fresh admin
const email = "admin@example.com";
const password = "admin123";

const hashedPassword = await bcrypt.hash(password, 10);

await Admin.create({
  email: email.toLowerCase(),
  password: hashedPassword,
});

console.log("✅ Admin created successfully");
console.log("Email:", email);
console.log("Password:", password);

mongoose.connection.close();

