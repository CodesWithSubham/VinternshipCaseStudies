import type { Request, Response, NextFunction } from "express";

export function insuranceCheck(req: Request, res: Response, next: NextFunction) {
  if (!req.body.insuranceApproved) {
    return res.status(403).json({ status: "error", error: "Insurance approval required" });
  }

  req.dischargeLog = req.dischargeLog || [];
  req.dischargeLog.push({ step: "insuranceApproved", time: new Date().toISOString() });

  next();
}
