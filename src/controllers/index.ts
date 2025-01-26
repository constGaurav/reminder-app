import { Request, Response } from "express";
import { CreateReminderSchema } from "../types";
import { ReminderRepository } from "../repositories";
import schedule from "node-schedule";

const reminderRepository = new ReminderRepository();
export class ReminderController {
  async createReminder(req: Request, res: Response) {
    try {
      const reminderReq = CreateReminderSchema.safeParse(req.body);
      if (!reminderReq.success) {
        throw new Error("Invalid data");
        return;
      }

      const data = await reminderRepository.create(reminderReq.data);

      // Schedule the job to remind to the people
      const remindAt = new Date(data.remindAt);
      schedule.scheduleJob(remindAt, async function () {
        console.log("\n\n---------------------------------------");
        console.log("Hey dude, Just reminding you about....");
        console.log(data.title);
        console.log("---------------------------------------\n\n");

        // mark the task as completed
        await reminderRepository.markCompleted(data.id);
      });

      res.json({
        message: "Reminder created successfully",
        data,
      });
    } catch (error) {
      res.status(400).json({
        message: "Invalid data",
        error,
      });
    }
  }
}
