import prismaClient from "../config";
import { TCreateReminder } from "../types";

export class ReminderRepository {
  async create(data: TCreateReminder) {
    const now = new Date();
    const remindAt = new Date(data.remindAt);
    if (remindAt <= now) {
      throw new Error("Invalid reminder time");
    }
    const response = await prismaClient.task.create({
      data,
    });

    return response;
  }

  async markCompleted(taskId: string) {
    await prismaClient.task.update({
      where: {
        id: taskId,
      },
      data: {
        isCompleted: true,
      },
    });
  }
}
