import type { Request, Response, NextFunction } from "express";

export function pharmacyCheck(req: Request, res: Response, next: NextFunction) {
  if (!req.body.pharmacyChecked) {
    return res.status(400).json({ status: "error", error: "Pharmacy review required" });
  }

  req.dischargeLog = req.dischargeLog || [];
  req.dischargeLog.push({ step: "pharmacyReview", time: new Date().toISOString() });

  next();
}
