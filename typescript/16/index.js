// 16 - Design Patterns
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.update = function (message) {
        console.log("Customer:", message);
    };
    return Customer;
}());
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    Inventory.prototype.update = function (message) {
        console.log("Inventory:", message);
    };
    return Inventory;
}());
var PromotionSystem = /** @class */ (function () {
    function PromotionSystem() {
    }
    PromotionSystem.prototype.update = function (message) {
        console.log("Promotion: Special offer! Buy 1 Get 1 Free!");
    };
    return PromotionSystem;
}());
// Subject
var DrinkOrder = /** @class */ (function () {
    function DrinkOrder() {
        this.observers = [];
    }
    DrinkOrder.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    DrinkOrder.prototype.notifyAll = function (message) {
        this.observers.forEach(function (obs) { return obs.update(message); });
    };
    DrinkOrder.prototype.completeOrder = function () {
        this.notifyAll("Order complete!");
    };
    return DrinkOrder;
}());
// Test
var order = new DrinkOrder();
order.addObserver(new Customer());
order.addObserver(new Inventory());
order.addObserver(new PromotionSystem());
order.completeOrder();
