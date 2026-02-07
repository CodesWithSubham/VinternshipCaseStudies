// 03 - Variables in Typescript

var city: string = "Kolkata";
var temperature: number = 16;
var isRaining = false; // TypeScript infer its type as boolean

// Function to print weather report
function weatherReport(city: string, temperature: number, isRaining: boolean): void {
  console.log(`In ${city}, it is ${temperature}°C. Is it raining? ${isRaining}`);
}

weatherReport(city, temperature, isRaining); // calling the weatherReport function that takes city, temperature, and isRaining as parameters and prints a message
