import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./models/User.js";

dotenv.config();

const resetAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const hashedPassword = await bcrypt.hash("admin123", 10);

    let admin = await User.findOne({ email: "admin@example.com" });

    if (!admin) {
      admin = new User({
        name: "Admin",
        email: "admin@example.com",
        phone: "0000000000",
        organization: "Admin Org",
        startDate: new Date(),
        endDate: new Date(),
        employmentType: "Full-time",
        password: hashedPassword,
        role: "admin"
      });

      await admin.save();
      console.log("✅ Admin created with password: admin123");
    } else {
      admin.password = hashedPassword;
      admin.role = "admin";
      await admin.save();
      console.log("✅ Admin password reset to: admin123");
    }

    mongoose.disconnect();
  } catch (err) {
    console.log("❌ Error:", err);
  }
};

resetAdmin();

