// 13 - Optional and Default Parameters in TypeScript
// ========================================
// Describe a person with optional age
// ========================================
function describePerson(name, age) {
    if (typeof age === "number") {
        console.log("Name: ".concat(name, ", Age: ").concat(age));
    }
    else {
        console.log("Name: ".concat(name, ", Age: Unknown"));
    }
}
// Test call
describePerson("Eve");
describePerson("Frank", 28);
// ========================================
// Calculate price with default discount
// ========================================
function calculatePrice(basePrice, discount) {
    if (discount === void 0) { discount = 0.1; }
    return basePrice - basePrice * discount;
}
// Test call
console.log(calculatePrice(100)); // 90
console.log(calculatePrice(100, 0.2)); // 80
