// 02 - Basic Syntax in Typescript
var myFavoriteFruit = "Strawberry";
console.log("My favorite fruit is " + myFavoriteFruit);
// This is a single line comment
// This function prints double of a number
function printDouble(num) {
    console.log("The double of ".concat(num, " is ").concat(num * 2));
}
printDouble(34);
/*
  This is a multi-line comment
  for the Person class below
*/
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log("Hello!");
    };
    return Person;
}());
var person = new Person();
person.sayHello();
