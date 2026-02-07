// 04 - let & const

let score: number = 99; // a variable declare with let


if (true) {
  // declare another score variable with a different value
  let score = 78;
  console.log(`The score inside if block is ${score}`);
  let score = 67; // index.ts:8:7 - error TS2451: Cannot redeclare block-scoped variable 'score'.
}

console.log(`The score outside if block is ${score}`);

// 
const COUNTRY = "India";
console.log(`The country is ${COUNTRY}`);
COUNTRY = "USA"; // index.ts:15:1 - error TS2588: Cannot assign to 'COUNTRY' because it is a constant.
