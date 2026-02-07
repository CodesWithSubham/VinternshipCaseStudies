// 02 - Basic Syntax in Typescript

let myFavoriteFruit: string = "Strawberry";
console.log("My favorite fruit is " + myFavoriteFruit);

// This is a single line comment
// This function prints double of a number
function printDouble(num: number): void {
  console.log(`The double of ${num} is ${num * 2}`);
}

printDouble(34);

/* 
  This is a multi-line comment
  for the Person class below
*/
class Person {
  sayHello(): void {
    console.log("Hello!");
  }
}

let person = new Person();
person.sayHello();
