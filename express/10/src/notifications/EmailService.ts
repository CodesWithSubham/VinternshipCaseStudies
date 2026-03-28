import { Service } from "typedi";
import { NotificationService } from "./NotificationService.js";

@Service()
export class EmailService implements NotificationService {
  async send(to: string, message: string): Promise<void> {
    console.log(`📧 Email sent to ${to}: ${message}`);
  }
}