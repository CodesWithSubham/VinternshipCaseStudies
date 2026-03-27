// Case Study 07: Request Validation
// I'm doing this with zod, instead of express-validator, because I find it more intuitive and easier to use.

import express, { type NextFunction, type Request, type Response } from "express";
import { validateRequest } from "./utils/validateRequest";
import { ApplicationSchema } from "./schema/ApplicationSchema";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

app.post("/apply", validateRequest(ApplicationSchema), (_req, res) => {
  // If we reach here, the application is valid!
  res.json({ status: "Application received!" });
});

// error handling middleware
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);

  return res
    .status(500)
    .json({ error: err instanceof Error ? err.message : "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
