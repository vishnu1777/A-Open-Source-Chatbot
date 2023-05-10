import { TypeOf, z } from "zod";

export const MessageSchema = z.object({
  id: z.string(),
  isUserMessage: z.boolean(),
  text: z.string(),
});

// array validators
export const MessageArray = z.array(MessageSchema);

export type Message = z.infer<typeof MessageSchema>;
