// Case Study 10: Dependency Injection with TypeDI

import "reflect-metadata";
import { Container } from "typedi";
import { AppointmentService } from "./appointments/AppointmentService.js";
import { SMSService } from "./notifications/SMSService.js";
import { StripeBillingService } from "./billing/StripeBillingService.js";
import { TOKENS } from "./tokens.js";

Container.set(TOKENS.NotificationService, new SMSService());
Container.set(TOKENS.BillingService, new StripeBillingService());

const appointmentService = Container.get(AppointmentService);

(async () => {
  const result = await appointmentService.bookAppointment("subham@gmail.com", "Monday 10AM", 500);

  console.log(result);
})();
