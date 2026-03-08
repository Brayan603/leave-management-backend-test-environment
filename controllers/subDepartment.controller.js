import SubDepartment from "../models/SubDepartment.js";
import Department from "../models/Department.js";

// Similar CRUD operations
export const createSubDepartment = async (req, res) => {
    try {
        const { name, department } = req.body;
        if (!name || !department) return res.status(400).json({ message: "Name and department are required." });

        const deptExists = await Department.findById(department);
        if (!deptExists) return res.status(404).json({ message: "Department not found." });

        const subDept = new SubDepartment({ name, department });
        const savedSubDept = await subDept.save();
        await savedSubDept.populate("department", "name");
        res.status(201).json(savedSubDept);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add get, update, delete as needed similarly