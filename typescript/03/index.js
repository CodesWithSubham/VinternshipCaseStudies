// 03 - Variables in Typescript
var city = "Kolkata";
var temperature = 16;
var isRaining = false; // TypeScript infer its type as boolean
// Function to print weather report
function weatherReport(city, temperature, isRaining) {
    console.log("In ".concat(city, ", it is ").concat(temperature, "\u00B0C. Is it raining? ").concat(isRaining));
}
weatherReport(city, temperature, isRaining); // calling the weatherReport function that takes city, temperature, and isRaining as parameters and prints a message
