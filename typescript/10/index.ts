// 10 - Conditional Logic in TypeScript

// ============================================
// function for positive number
// ============================================
function checkSign(num: number): void {
  if (num > 0) {
    console.log(`${num} is Positive`);
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

function evenOrOdd(num: number): void {
  if (num % 2 === 0) {
    console.log(`${num} is Even`);
  } else {
    console.log(`${num} is Odd`);
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
function getGrade(score: number): string {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Example call
const score1 = 89;
const score2 = 56;
const grade1 = getGrade(score1);
const grade2 = getGrade(score2);
console.log(`Score: ${score1}, Grade: ${grade1}`);
console.log(`Score: ${score2}, Grade: ${grade2}`);

// Output:
// Score: 89, Grade: B
// Score: 56, Grade: F

// ============================================
// function for return a letter grade
// ============================================

function provideFeedback(grade: string): void {
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
const grade = "B";
provideFeedback(grade);

// Output:
// Feedback: Good job!

// Invalid input
provideFeedback("Z");

// Output:
// Invalid grade.
