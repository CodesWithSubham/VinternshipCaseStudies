// 05 - Any type in Typescript

// creating an object to store answers
const recordedAnswers: { [qId: string]: any } = {};

// function to record answers
function recordAnswer(qId: string, answer: any): void {
  recordedAnswers[qId] = answer;
}

// recording answers
recordAnswer("01", "Yes"); // string
recordAnswer("02", 100); // number
recordAnswer("03", ["b", "c"]); // array

// printing all answers
for (const answer in recordedAnswers) {
  console.log(`The answer of question ${answer} is ${recordedAnswers[answer]}`);
}
