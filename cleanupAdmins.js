import mongoose from "mongoose";

const mongoURI = "mongodb://127.0.0.1:27017/leave-management-system";
await mongoose.connect(mongoURI);

const AdminSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const Admin = mongoose.model("Admin", AdminSchema);

// remove all admins with that email
await Admin.deleteMany({ email: "admin@example.com" });

console.log("✅ Duplicate admins removed");
mongoose.connection.close();
