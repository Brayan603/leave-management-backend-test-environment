import User from "../models/User.js";
import Organization from "../models/Organization.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { email, password, role, organizationId } = req.body;

    if (!email || !password || !role || !organizationId) {
      return res.status(400).json({ message: "All fields required" });
    }

    const org = await Organization.findById(organizationId);
    if (!org) return res.status(404).json({ message: "Organization not found" });

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
      role,
      organization: organizationId
    });

    res.status(201).json({
      message: "User created successfully",
      user
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

