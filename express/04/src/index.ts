// Case Study 04: Request and Response

import express, { type NextFunction, type Request, type Response } from "express";
import transferRouter from "./routes/transfer";
import { users } from "./db";
import { ZodError } from "zod";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

app.get("/users", (_req, res) => {
  res.json(users);
});

app.use("/transfer", transferRouter);

// error handling middleware
app.use((err: unknown, _req: Request, res: Response, next: NextFunction) => {
  console.error(err);

  if (err instanceof ZodError) {
    return res.status(400).json({ error: err.issues[0]?.message || "Invalid request body" });
  } else if (err instanceof Error) {
    return res.status(500).json({ error: err.message || "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
