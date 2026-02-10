var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Generic class that can store feedback of any type
var FeedbackBox = /** @class */ (function () {
    function FeedbackBox() {
        this.feedbacks = [];
    }
    FeedbackBox.prototype.addFeedback = function (feedback) {
        this.feedbacks.push(feedback);
    };
    FeedbackBox.prototype.getAllFeedback = function () {
        return __spreadArray([], this.feedbacks, true);
    };
    return FeedbackBox;
}());
// Generic function to get first item from any array
function getFirstItem(items) {
    return items[0];
}
//=========== Example Usage =============
// Using FeedbackBox for string feedback
var quizFeedback = new FeedbackBox();
quizFeedback.addFeedback("Great quiz!");
quizFeedback.addFeedback("Too hard!");
var firstQuiz = getFirstItem(quizFeedback.getAllFeedback());
console.log(firstQuiz);
var lessonFeedback = new FeedbackBox();
lessonFeedback.addFeedback({ rating: 5, comment: "Loved it!" });
var firstLesson = getFirstItem(lessonFeedback.getAllFeedback());
console.log(firstLesson);
