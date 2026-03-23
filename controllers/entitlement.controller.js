import Entitlement from "../models/Entitlement.js";

// ✅ Create Entitlement (Admin)
export const createEntitlement = async (req, res) => {
  try {
    const { userId, leaveTypeId, totalDays } = req.body;

    if (!userId || !leaveTypeId || !totalDays) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Prevent duplicate entitlement
    const exists = await Entitlement.findOne({
      user: userId,
      leaveType: leaveTypeId,
    });

    if (exists) {
      return res.status(400).json({ message: "Entitlement already exists" });
    }

    const entitlement = await Entitlement.create({
      user: userId,
      leaveType: leaveTypeId,
      totalDays,
    });

    res.status(201).json(entitlement);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Get all entitlements
export const getAllEntitlements = async (req, res) => {
  try {
    const data = await Entitlement.find()
      .populate("user", "firstName lastName email")
      .populate("leaveType", "name");

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get user entitlements
export const getUserEntitlements = async (req, res) => {
  try {
    const { userId } = req.params;

    const data = await Entitlement.find({ user: userId })
      .populate("leaveType", "name");

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Update entitlement
export const updateEntitlement = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Entitlement.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Delete entitlement
export const deleteEntitlement = async (req, res) => {
  try {
    const { id } = req.params;
    await Entitlement.findByIdAndDelete(id);
    res.json({ message: "Entitlement deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};