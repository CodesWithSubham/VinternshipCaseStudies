// 12 - Mastering Functions in TypeScript
// =================================================
// Call displayMember: one with email, one without.
// =================================================
function displayMember(id, name, email) {
    console.log("ID: ".concat(id, ", Name: ").concat(name));
    if (email)
        console.log("Email: ".concat(email));
}
displayMember(1, "Alice", "alice@example.com");
displayMember(2, "Bob");
// =================================================
// Use calculateFines to sum fines: 5, 10, 2.5
// =================================================
function calculateFines() {
    var fines = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fines[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, fines_1 = fines; _a < fines_1.length; _a++) {
        var fine = fines_1[_a];
        total += fine;
    }
    return total;
}
console.log("Total fines:", calculateFines(5, 10, 2.5));
// =================================================
// a membership fee for $100 with default discount, then with 20%
// =================================================
function membershipFee(price, discountRate) {
    if (discountRate === void 0) { discountRate = 0.1; }
    return price - price * discountRate;
}
console.log("Default fee:", membershipFee(100));
console.log("20% discount:", membershipFee(100, 0.2));
function greetVisitor(visitor, formatter) {
    formatter(visitor);
}
var vipGreet = function (name) { return console.log("Welcome VIP ".concat(name, "!")); };
var consoleGreet = function (name) { return console.log("Hello, ".concat(name, "!")); };
// Calling
greetVisitor("Alice", vipGreet);
greetVisitor("Bob", consoleGreet);
// ===================================================
// Compute factorial
// ===================================================
function factorial(n) {
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
}
console.log("Factorial 5:", factorial(5));
function generateReport(data, format) {
    if (format === "json") {
        return JSON.stringify(data, null, 2);
    }
    return data.map(function (item) { return JSON.stringify(item); }).join("\n");
}
var books = [{ title: "1984" }, { title: "The Hobbit" }];
console.log("Text Report:\n", generateReport(books));
console.log("JSON Report:\n", generateReport(books, "json"));
