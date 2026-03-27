import type { Request, Response, NextFunction } from "express";

export function followupCheck(req: Request, res: Response, next: NextFunction) {
  if (!req.body.followupScheduled) {
    return res.status(400).json({ status: "error", error: "Follow-up not scheduled" });
  }

  req.dischargeLog = req.dischargeLog || [];
  req.dischargeLog.push({ step: "followupCheck", time: new Date().toISOString() });

  next();
}
