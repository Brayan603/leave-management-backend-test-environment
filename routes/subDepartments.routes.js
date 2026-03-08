import express from "express";
import { createSubDepartment } from "../controllers/subDepartment.controller.js";

const router = express.Router();

router.post("/", createSubDepartment);
// add get, put, delete as needed

export default router;