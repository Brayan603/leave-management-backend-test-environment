const mongoose = require("mongoose");

const organizationLeavePolicySchema = new mongoose.Schema({
  organizationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
    required: true
  },

  leaveTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LeaveType",
    required: true
  },

  maxDays: {
    type: Number,
    required: true
  },

  requiresApproval: {
    type: Boolean,
    default: true
  }

}, { timestamps: true });

module.exports = mongoose.model(
  "OrganizationLeavePolicy",
  organizationLeavePolicySchema
);