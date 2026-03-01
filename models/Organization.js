import mongoose from "mongoose";

const OrganizationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    registrationNumber: String,
    email: String,
    phone: String,
    address: String,
    status: { type: String, default: "active" },
    isDeleted: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model("Organization", OrganizationSchema);

