import LeaveType from "../models/LeaveType.js";

export const createLeaveType = async (req, res) => {
  try {
    const leaveType = await LeaveType.create(req.body);
    res.status(201).json(leaveType);
  } catch (error) {
    console.error("Create Leave Type Error:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getLeaveTypes = async (req, res) => {
  try {
    const leaveTypes = await LeaveType.find()
      .populate("organization", "name");
    res.json(leaveTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

