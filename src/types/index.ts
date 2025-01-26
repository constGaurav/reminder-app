import { z } from "zod";

export const CreateReminderSchema = z.object({
  title: z.string(),
  remindAt: z.string(),
});

export type TCreateReminder = z.infer<typeof CreateReminderSchema>;
