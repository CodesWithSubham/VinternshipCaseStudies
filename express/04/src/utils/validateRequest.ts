import type { RequestHandler } from "express";
import type { ZodType } from "zod";

export function validateRequest<T extends ZodType>(schema: T): RequestHandler {
  return (req, res, next) => {
    const validationResult = schema.safeParse(req.body);
    if (!validationResult.success) {
      return res
        .status(400)
        .json({ error: validationResult.error.issues[0]?.message || "Invalid request body" });
    }

    req.body = validationResult.data;

    next();
  };
}
