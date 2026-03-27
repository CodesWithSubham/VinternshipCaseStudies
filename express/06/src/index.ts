// Case Study 06: Middleware

import express, { type NextFunction, type Request, type Response } from "express";
import { logDischarge } from "./middleware/logDischarge";
import { doctorCheck } from "./middleware/doctorCheck";
import { pharmacyCheck } from "./middleware/pharmacyCheck";
import { insuranceCheck } from "./middleware/insuranceCheck";
import { followupCheck } from "./middleware/followupCheck";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

app.post(
  "/discharge",
  logDischarge,
  doctorCheck,
  pharmacyCheck,
  insuranceCheck,
  followupCheck,
  (req, res) => {
    req.dischargeLog = req.dischargeLog || [];
    req.dischargeLog.push({
      step: "dischargeComplete",
      time: new Date().toISOString(),
    });

    res.json({
      status: "success",
      message: "Patient discharged successfully",
      patient: req.body.patientName,
      log: req.dischargeLog,
    });
  },
);

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
