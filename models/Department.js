import mongoose from "mongoose";

const DepartmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  organizationId: { type: mongoose.Schema.Types.ObjectId, ref: "Organization", required: true },
  subUnits: { type: String },
  managerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
}, { timestamps: true });

export default mongoose.model("Department", DepartmentSchema);