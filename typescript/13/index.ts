// 13 - Optional and Default Parameters in TypeScript

// ========================================
// Describe a person with optional age
// ========================================

function describePerson(name: string, age?: number): void {
  if (typeof age === "number") {
    console.log(`Name: ${name}, Age: ${age}`);
  } else {
    console.log(`Name: ${name}, Age: Unknown`);
  }
}

// Test call
describePerson("Eve");
describePerson("Frank", 28);

// ========================================
// Calculate price with default discount
// ========================================

function calculatePrice(basePrice: number, discount: number = 0.1): number {
  return basePrice - basePrice * discount;
}

// Test call
console.log(calculatePrice(100));      // 90
console.log(calculatePrice(100, 0.2)); // 80
