import { Request, Response } from "express";
import { CreateReminderSchema } from "../types";

export class ReminderController {
  createReminder(req: Request, res: Response) {
    const reminderReq = CreateReminderSchema.safeParse(req.body);
    if (reminderReq.success) {
      res.status(400).json({
        message: "Invalid data",
        error: reminderReq.error ?? "Something went wrong",
      });
      return;
    }

    // TODO: add reminder to db

    res.json({
      message: "Reminder created successfully",
      // pass data
    });
  }
}
