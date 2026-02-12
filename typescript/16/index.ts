// 16 - Design Patterns

// Observer interface
interface Observer {
  update(message: string): void;
}

class Customer implements Observer {
  update(message: string): void {
    console.log("Customer:", message);
  }
}

class Inventory implements Observer {
  update(message: string): void {
    console.log("Inventory:", message);
  }
}

class PromotionSystem implements Observer {
  update(message: string): void {
    console.log("Promotion: Special offer! Buy 1 Get 1 Free!");
  }
}

// Subject
class DrinkOrder {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  notifyAll(message: string): void {
    this.observers.forEach(obs => obs.update(message));
  }

  completeOrder(): void {
    this.notifyAll("Order complete!");
  }
}

// Test
const order = new DrinkOrder();
order.addObserver(new Customer());
order.addObserver(new Inventory());
order.addObserver(new PromotionSystem());

order.completeOrder();

// Output:
// Customer: Order complete!
// Inventory: Order complete!
// Promotion: Special offer! Buy 1 Get 1 Free!