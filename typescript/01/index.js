// 01 - Introduction to TypeScript
var message = "Hello, my name is Subham Duary. Nice to meet you.";
console.log(message); // This prints the message without any errors
var age = 21;
console.log("I am ".concat(age, " years old."));
var demoString = "Introduction to TypeScript";
// Attempting to assign a number to a string variable.
demoString = 1; // index.ts:12:1 - error TS2322: Type 'number' is not assignable to type 'string'.
