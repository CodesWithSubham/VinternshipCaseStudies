import { Service } from "typedi";
import { SMSService } from "../notifications/SMSService.js";
import { StripeBillingService } from "../billing/StripeBillingService.js";

@Service()
export class AppointmentService {
  constructor(
    private notifier: SMSService,
    private billing: StripeBillingService
  ) {}

  async bookAppointment(
    patient: string,
    time: string,
    amount: number
  ) {

    await this.billing.charge(patient, amount);

    await this.notifier.send(
      patient,
      `Your appointment is booked for ${time}`
    );

    return { status: "confirmed" };
  }
}