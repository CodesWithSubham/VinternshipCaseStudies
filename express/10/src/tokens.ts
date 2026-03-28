import { Token } from "typedi";
import { NotificationService } from "./notifications/NotificationService.js";
import { BillingService } from "./billing/BillingService.js";

export const TOKENS = {
  NotificationService: new Token<NotificationService>("NotificationService"),
  BillingService: new Token<BillingService>("BillingService"),
};
