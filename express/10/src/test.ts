import "reflect-metadata";
import { Container } from "typedi";
import { AppointmentService } from "./appointments/AppointmentService.js";
import { NotificationService } from "./notifications/NotificationService.js";
import { BillingService } from "./billing/BillingService.js";
import { TOKENS } from "./tokens.js";

class MockNotifier implements NotificationService {
  messages: string[] = [];

  async send(to: string, message: string) {
    this.messages.push(`${to}: ${message}`);
  }
}

class MockBilling implements BillingService {
  charges: string[] = [];

  async charge(patient: string, amount: number) {
    this.charges.push(`${patient}: ₹${amount}`);
  }
}

(async () => {
  const mockNotifier = new MockNotifier();
  const mockBilling = new MockBilling();

  Container.set(TOKENS.NotificationService, mockNotifier);
  Container.set(TOKENS.BillingService, mockBilling);

  const service = Container.get(AppointmentService);

  await service.bookAppointment("test@gmail.com", "Tuesday 2PM", 300);

  console.log("Messages:", mockNotifier.messages);
  console.log("Charges:", mockBilling.charges);

  Container.reset();
})();
