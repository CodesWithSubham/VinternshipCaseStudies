// 14 - Generics

// Generic class that can store feedback of any type
class FeedbackBox<T> {
  private feedbacks: T[] = [];

  addFeedback(feedback: T) {
    this.feedbacks.push(feedback);
  }

  getAllFeedback(): T[] {
    return [...this.feedbacks];
  }
}

// Generic function to get first item from any array
function getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}

//=========== Example Usage =============

// Using FeedbackBox for string feedback
const quizFeedback = new FeedbackBox<string>();
quizFeedback.addFeedback("Great quiz!");
quizFeedback.addFeedback("Too hard!");

const firstQuiz = getFirstItem(quizFeedback.getAllFeedback());
console.log(firstQuiz);

// Using FeedbackBox for object feedback
type LessonFeedback = { rating: number; comment: string };

const lessonFeedback = new FeedbackBox<LessonFeedback>();
lessonFeedback.addFeedback({ rating: 5, comment: "Loved it!" });

const firstLesson = getFirstItem(lessonFeedback.getAllFeedback());
console.log(firstLesson);
