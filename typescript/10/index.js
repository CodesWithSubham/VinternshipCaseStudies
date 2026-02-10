// 10 - Conditional Logic in TypeScript
// ============================================
// function for positive number
// ============================================
function checkSign(num) {
    if (num > 0) {
        console.log("".concat(num, " is Positive"));
    }
}
// Example call
checkSign(10);
checkSign(-5);
// Output:
// 10 is Positive
// ============================================
// function for odd or even
// ============================================
function evenOrOdd(num) {
    if (num % 2 === 0) {
        console.log("".concat(num, " is Even"));
    }
    else {
        console.log("".concat(num, " is Odd"));
    }
}
// Example call
evenOrOdd(7);
evenOrOdd(10);
// Output:
// 7 is Odd
// 10 is Even
// ============================================
// function for return a letter grade
// ============================================
function getGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
// Example call
var score1 = 89;
var score2 = 56;
var grade1 = getGrade(score1);
var grade2 = getGrade(score2);
console.log("Score: ".concat(score1, ", Grade: ").concat(grade1));
console.log("Score: ".concat(score2, ", Grade: ").concat(grade2));
// Output:
// Score: 89, Grade: B
// Score: 56, Grade: F
// ============================================
// function for return a letter grade
// ============================================
function provideFeedback(grade) {
    switch (grade) {
        case "A":
            console.log("Feedback: Excellent performance!");
            break;
        case "B":
            console.log("Feedback: Good job!");
            break;
        case "C":
            console.log("Feedback: Good effort, keep improving.");
            break;
        case "D":
            console.log("Feedback: Need improvement.");
            break;
        case "F":
            console.log("Feedback: Unsatisfactory, seek help.");
            break;
        default:
            console.log("Invalid grade.");
    }
}
// Example call
var grade = "B";
provideFeedback(grade);
// Output:
// Feedback: Good job!
// Invalid input
provideFeedback("Z");
// Output:
// Invalid grade.
