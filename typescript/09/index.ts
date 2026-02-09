// 09 - Type Aliases

type CustomerID = string;

type Customer = {
  id: CustomerID;
  name: string;
  email?: string;
};

type OrderStatus = "pending" | "shipped" | "delivered";
type OrderCallback = (status: OrderStatus) => void;

type processOrder = (orderId: number, callback: OrderCallback) => void;

type Container<T> = {
  value: T;
  time: Date;
};

// example use
const customer: Customer = {
  id: "123",
  name: "John Doe",
};

const customerContainer: Container<Customer> = {
  value: customer,
  time: new Date(),
};

function processOrder(orderId: number, callback: OrderCallback): void {
  const status: OrderStatus = "shipped";
  console.log(`Order ${orderId} is processed.`);
  callback(status);
}

// calling processOrder
processOrder(1, (status) => {
  console.log(`Order status: ${status}`);
});
console.log(customerContainer);

// Output:
// Order 1 is processed.
// Order status: shipped
// {
//   value: { id: '123', name: 'John Doe' },
//   time: 2026-02-09T12:33:24.187Z
// }