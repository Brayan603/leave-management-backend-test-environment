import mongoose from "mongoose";

const leaveTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    code: {
      type: String,
      required: true,
      uppercase: true
    },
    maxDays: {
      type: Number,
      required: true,
      min: 1
    },
    accrualType: {
      type: String,
      enum: ["Fixed", "Monthly Accrual"],
      default: "Fixed"
    },
    accrualRate: {
      type: Number,
      default: 0
    },
    carryForward: {
      type: Boolean,
      default: false
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active"
    }
  },
  { timestamps: true }
);

export default mongoose.model("LeaveType", leaveTypeSchema);




