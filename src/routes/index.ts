import { Router } from "express";
import { ReminderController } from "../controllers";

const router = Router();

const reminderController = new ReminderController();

router.post("/reminder", reminderController.createReminder);

export default router;
