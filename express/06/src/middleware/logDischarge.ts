import type { Request, Response, NextFunction } from "express";

export function logDischarge(req: Request, _res: Response, next: NextFunction) {
  req.dischargeLog = req.dischargeLog || [];
  req.dischargeLog.push({ step: "requestReceived", time: new Date().toISOString() });
  next();
}
