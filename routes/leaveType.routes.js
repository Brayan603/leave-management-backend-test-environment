import express from "express";
import {
  createLeaveType,
  getLeaveTypes
} from "../controllers/leaveType.controller.js";

const router = express.Router();

router.post("/", createLeaveType);
router.get("/", getLeaveTypes);

export default router;







