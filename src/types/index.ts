import { z } from "zod";

export const CreateReminderSchema = z.object({
  title: z.string(),
  remindAt: z.date(),
});

export type TCreateReminder = z.infer<typeof CreateReminderSchema>;
