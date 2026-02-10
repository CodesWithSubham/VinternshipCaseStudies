// 11 - Mastering Loops in TypeScript

// ============================================
// Example Data Structures
// ============================================

// Transaction type
type Transaction = {
  id: number;
  type: "checkout" | "return" | "cancelled" | "priority";
};

const transactions: Transaction[] = [
  { id: 1, type: "checkout" },
  { id: 2, type: "cancelled" },
  { id: 3, type: "return" },
  { id: 4, type: "priority" },
  { id: 5, type: "checkout" },
];

const inventory: { [title: string]: number } = {
  "The Hobbit": 3,
  "1984": 5,
  "TypeScript Guide": 2,
};

const visitors: string[] = ["Alice", "Bob", "Carol"];

// ============================================
// Counter for each transaction type
// ============================================
const counters: Record<Transaction["type"], number> = {
  checkout: 0,
  return: 0,
  priority: 0,
  cancelled: 0,
};

for (let i = 0; i < transactions.length; i++) {
  counters[transactions[i].type]++;
}
console.log("Transaction counters:", counters);

// ============================================
// while(true) loop with break on priority
// ============================================

let i = 0;
while (true) {
  const tx = transactions[i];
  if (!tx) break;

  if (tx.type === "priority") {
    console.log("New priority found, stopping.");
    break;
  }
  console.log(`Processing ${tx.id}`);
  i++;
}

// ============================================
// do…while loop to handle a dynamic queue
// ============================================

let pendingReturns = 0;
let idx = 0;
do {
  const tx = transactions[idx++];
  if (tx.type === "return") {
    console.log(`Handled return ${tx.id}`);
    pendingReturns++;
  }
} while (transactions.length > idx);

console.log("Total returns handled:", pendingReturns);

// ============================================
// for…in to reset all inventory counts to zero
// ============================================

for (let key in inventory) {
  inventory[key] = 0;
}
console.log("Inventory after reset:", inventory);

// ============================================
// Display visitor names in reverse order
// ============================================
for (let visitor of visitors.reverse()) {
  console.log("Visitor:", visitor);
}
