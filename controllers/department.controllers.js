import Department from "../models/Department.js";

// Add Department
export const addDepartment = async (req, res) => {
  try {
    const { name, organizationId, subUnits, managerId, status } = req.body;

    if (!name || !organizationId) {
      return res.status(400).json({ message: "Department name and organizationId are required" });
    }

    const department = new Department({ name, organizationId, subUnits, managerId, status });
    const saved = await department.save();

    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all Departments
export const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find()
      .populate("organizationId", "name") // show organization name
      .populate("managerId", "name");     // show manager name
    res.json(departments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Update Department
export const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Department.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete Department
export const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    await Department.findByIdAndDelete(id);
    res.json({ message: "Department deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};