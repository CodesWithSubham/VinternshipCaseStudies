import type { Request, Response, NextFunction } from "express";

export function doctorCheck(req: Request, res: Response, next: NextFunction) {
  if (!req.body.doctorSigned) {
    return res.status(400).json({ status: "error", error: "Doctor sign-off required" });
  }

  req.dischargeLog = req.dischargeLog || [];
  req.dischargeLog.push({ step: "doctorSignoff", time: new Date().toISOString() });

  next();
}
