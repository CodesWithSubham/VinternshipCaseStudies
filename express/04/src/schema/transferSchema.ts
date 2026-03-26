import z from "zod";

export const TransferSchema = z.object({
  fromCustomerId: z.number(),
  toCustomerId: z.number(),
  points: z.number().positive(),
});
