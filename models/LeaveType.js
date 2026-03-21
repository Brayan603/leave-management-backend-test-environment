import mongoose from "mongoose";

const LeaveTypeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  type: { type: String, enum: ["fixed", "accrual"], required: true },
  maxDays: { type: Number }, // for fixed leave
  accrualRate: { type: Number }, // per month, for accrual leave
}, { timestamps: true });

export default mongoose.model("LeaveType", LeaveTypeSchema);




