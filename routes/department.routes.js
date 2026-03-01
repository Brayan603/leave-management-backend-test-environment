import express from "express";
import Department from "../models/Department.js";

const router = express.Router();

// GET all departments
router.get("/", async (req, res) => {
  try {
    const departments = await Department.find()
      .populate("organizationId", "name")
      .populate("managerId", "name");

    res.json(departments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ADD department
router.post("/", async (req, res) => {
  const { name, organizationId, subUnits, managerId, status } = req.body;

  try {
    if (!name || !organizationId) {
      return res.status(400).json({ message: "Name and organization are required" });
    }

    const dept = new Department({
      name,
      organizationId,
      subUnits,
      managerId,
      status
    });

    await dept.save();
    res.status(201).json(dept);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE department
router.put("/:id", async (req, res) => {
  try {
    const updated = await Department.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE department
router.delete("/:id", async (req, res) => {
  try {
    await Department.findByIdAndDelete(req.params.id);
    res.json({ message: "Department deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;