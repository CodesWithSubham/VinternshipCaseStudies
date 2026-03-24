// 09 - Type Aliases
// example use
var customer = {
    id: "123",
    name: "John Doe",
};
var customerContainer = {
    value: customer,
    time: new Date(),
};
function processOrder(orderId, callback) {
    var status = "shipped";
    console.log("Order ".concat(orderId, " is processed."));
    callback(status);
}
// calling processOrder
processOrder(1, function (status) {
    console.log("Order status: ".concat(status));
});
console.log(customerContainer);
// Output:
// Order 1 is processed.
// Order status: shipped
// {
//   value: { id: '123', name: 'John Doe' },
//   time: 2026-02-09T12:33:24.187Z
// }
