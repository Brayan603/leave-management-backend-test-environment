const LeaveType = require("../models/LeaveType");

const leaveTypes = [
  { name: "Annual Leave" },
  { name: "Sick Leave" },
  { name: "Maternity Leave" },
  { name: "Paternity Leave" },
  { name: "Compassionate Leave" }
];

const seedLeaveTypes = async () => {
  const count = await LeaveType.countDocuments();

  if (count === 0) {
    await LeaveType.insertMany(leaveTypes);
    console.log("Default leave types seeded");
  }
};

module.exports = seedLeaveTypes;