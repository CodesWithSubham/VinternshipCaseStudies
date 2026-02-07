// 05 - Any type in Typescript
// creating an object to store answers
var recordedAnswers = {};
// function to record answers
function recordAnswer(qId, answer) {
    recordedAnswers[qId] = answer;
}
// recording answers
recordAnswer("01", "Yes"); // string
recordAnswer("02", 100); // number
recordAnswer("03", ["b", "c"]); // array
// printing all answers
for (var answer in recordedAnswers) {
    console.log("The answer of question ".concat(answer, " is ").concat(recordedAnswers[answer]));
}
