// Case Study 05: Routing Controllers

import express, { type NextFunction, type Request, type Response } from "express";
import BakingController from "./controllers/banking.controllers";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

// register controllers
app.use("/baking", BakingController);

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
