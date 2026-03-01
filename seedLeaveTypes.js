// seedLeaveTypes.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import LeaveType from "./models/LeaveType.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

const leaveTypes = [
  { name: "Annual Leave", maxDays: 24 },
  { name: "Sick Leave", maxDays: 12 },
  { name: "Casual Leave", maxDays: 10 },
];

const seed = async () => {
  try {
    await LeaveType.deleteMany({});
    await LeaveType.insertMany(leaveTypes);
    console.log("Leave types seeded!");
    mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
};

seed();
