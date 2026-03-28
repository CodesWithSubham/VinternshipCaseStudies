import { Service } from "typedi";
import { NotificationService } from "./NotificationService.js";

@Service()
export class SMSService implements NotificationService {
  async send(to: string, message: string): Promise<void> {
    console.log(`📱 SMS sent to ${to}: ${message}`);
  }
}