import Organization from "../models/Organization.js";

export const createOrganization = async (req, res) => {
  try {
    const organization = await Organization.create(req.body);
    res.status(201).json(organization);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrganizations = async (req, res) => {
  const organizations = await Organization.find({ isDeleted: false });
  res.json(organizations);
};