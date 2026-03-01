import express from "express";
import Organization from "../models/Organization.js";

const router = express.Router();

// Get all organizations
router.get("/", async (req, res) => {
  const orgs = await Organization.find();
  res.json(orgs);
});

// Add new organization
router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const existing = await Organization.findOne({ name });
    if (existing) return res.status(400).json({ message: "Organization already exists" });

    const org = new Organization({ name });
    await org.save();
    res.json(org);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
