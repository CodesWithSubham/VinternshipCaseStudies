// 18 - Dependency Injection

// Payment Gateway
interface PaymentGateway {
  processPayment(amount: number): Promise<boolean>;
}

// Concrete Payment Gateways
class StripeGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Processing payment of $${amount} via Stripe.`);
    // Simulate API call...
    return true;
  }
}

class PaypalGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Processing payment of $${amount} via PayPal.`);
    // Simulate API call...
    return true;
  }
}

// Bank Transfer Gateway
class BankTransferGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Processing $${amount} via Bank Transfer`);
    // Simulate API call...
    return true;
  }
}

// Payment Processor Using Constructor Injection
class PaymentProcessor {
  constructor(private gateway: PaymentGateway) {}

  async pay(amount: number): Promise<void> {
    const success = await this.gateway.processPayment(amount);

    if (success) {
      console.log("Payment successful!");
    } else {
      console.log("Payment failed.");
    }
  }
}

// mock gateway that simulates failure
class FailingMockGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Mock processing $${amount}...`);
    return false; // simulates failure
  }
}

// Testing
const bankGateway = new BankTransferGateway();
const processor1 = new PaymentProcessor(bankGateway);
processor1.pay(300); // Uses Bank Transfer

const failingGateway = new FailingMockGateway();
const processor2 = new PaymentProcessor(failingGateway);
processor2.pay(150); // Simulated failure

// index.ts:8:41 - error TS2705: An async function or method in ES5 requires the 'Promise' constructor.  Make sure you have a declaration for the 'Promise' constructor or include 'ES2015' in your '--lib' option.

// So we need to compile with
// tsc index.ts --target es2022

// Output:
// Processing $300 via Bank Transfer
// Mock processing $150...
// Payment successful!
// Payment failed.
