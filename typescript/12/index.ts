// 12 - Mastering Functions in TypeScript

// =================================================
// Call displayMember: one with email, one without.
// =================================================

function displayMember(id: number, name: string, email?: string): void {
  console.log(`ID: ${id}, Name: ${name}`);
  if (email) console.log(`Email: ${email}`);
}

displayMember(1, "Alice", "alice@example.com");
displayMember(2, "Bob");

// =================================================
// Use calculateFines to sum fines: 5, 10, 2.5
// =================================================

function calculateFines(...fines: number[]): number {
  let total = 0;
  for (let fine of fines) total += fine;
  return total;
}

console.log("Total fines:", calculateFines(5, 10, 2.5));

// =================================================
// a membership fee for $100 with default discount, then with 20%
// =================================================

function membershipFee(price: number, discountRate: number = 0.1): number {
  return price - price * discountRate;
}

console.log("Default fee:", membershipFee(100));
console.log("20% discount:", membershipFee(100, 0.2));

// ===================================================
// Greet visitors “Alice” and “Bob” using both vipGreet and consoleGreet
// ===================================================
type GreetingFormatter = (name: string) => void;

function greetVisitor(visitor: string, formatter: GreetingFormatter): void {
  formatter(visitor);
}

const vipGreet: GreetingFormatter = (name) => console.log(`Welcome VIP ${name}!`);
const consoleGreet: GreetingFormatter = (name) => console.log(`Hello, ${name}!`);

// Calling
greetVisitor("Alice", vipGreet);
greetVisitor("Bob", consoleGreet);

// ===================================================
// Compute factorial
// ===================================================

function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log("Factorial 5:", factorial(5));

// ================================================
// Function Overloads for Report Generation
// ================================================

function generateReport(data: object[]): string;
function generateReport(data: object[], format: "json"): string;
function generateReport(data: any[], format?: string): string {
  if (format === "json") {
    return JSON.stringify(data, null, 2);
  }
  return data.map((item) => JSON.stringify(item)).join("\n");
}

type Book = { title: string };
const books: Book[] = [{ title: "1984" }, { title: "The Hobbit" }];
console.log("Text Report:\n", generateReport(books));
console.log("JSON Report:\n", generateReport(books, "json"));
