// 11 - Mastering Loops in TypeScript
var transactions = [
    { id: 1, type: "checkout" },
    { id: 2, type: "cancelled" },
    { id: 3, type: "return" },
    { id: 4, type: "priority" },
    { id: 5, type: "checkout" },
];
var inventory = {
    "The Hobbit": 3,
    "1984": 5,
    "TypeScript Guide": 2,
};
var visitors = ["Alice", "Bob", "Carol"];
// ============================================
// Counter for each transaction type
// ============================================
var counters = {
    checkout: 0,
    return: 0,
    priority: 0,
    cancelled: 0,
};
for (var i_1 = 0; i_1 < transactions.length; i_1++) {
    counters[transactions[i_1].type]++;
}
console.log("Transaction counters:", counters);
// ============================================
// while(true) loop with break on priority
// ============================================
var i = 0;
while (true) {
    var tx = transactions[i];
    if (!tx)
        break;
    if (tx.type === "priority") {
        console.log("New priority found, stopping.");
        break;
    }
    console.log("Processing ".concat(tx.id));
    i++;
}
// ============================================
// do…while loop to handle a dynamic queue
// ============================================
var pendingReturns = 0;
var idx = 0;
do {
    var tx = transactions[idx++];
    if (tx.type === "return") {
        console.log("Handled return ".concat(tx.id));
        pendingReturns++;
    }
} while (transactions.length > idx);
console.log("Total returns handled:", pendingReturns);
// ============================================
// for…in to reset all inventory counts to zero
// ============================================
for (var key in inventory) {
    inventory[key] = 0;
}
console.log("Inventory after reset:", inventory);
/* 5. Print visitors in reverse */
for (var j = visitors.length - 1; j >= 0; j--) {
    console.log("Visitor:", visitors[j]);
}
for (var _i = 0, _a = visitors.reverse(); _i < _a.length; _i++) {
    var visitor = _a[_i];
    console.log("Visitor:", visitor);
}
