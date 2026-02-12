// 17 - Classes & Access Modifiers
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract class: the blueprint for all content
var Content = /** @class */ (function () {
    function Content(title, author) {
        this.published = false;
        this.title = title;
        this.author = author;
    }
    Content.prototype.publish = function () {
        this.published = true;
    };
    Content.prototype.isPublished = function () {
        return this.published;
    };
    return Content;
}());
// Create an Assignment class extending Content.
var Assignment = /** @class */ (function (_super) {
    __extends(Assignment, _super);
    function Assignment(title, author, dueDate) {
        var _this = _super.call(this, title, author) || this;
        _this.dueDate = dueDate;
        return _this;
    }
    // only instructors to set or update the due date before publishing.
    Assignment.prototype.setDueDate = function (newDate, isInstructor) {
        if (!this.isPublished() && isInstructor) {
            this.dueDate = newDate;
        }
        else {
            throw new Error("Cannot modify due date after publishing or if not instructor.");
        }
    };
    Assignment.prototype.getDueDate = function () {
        return this.dueDate;
    };
    Assignment.prototype.getType = function () {
        return "Assignment";
    };
    return Assignment;
}(Content));
// Testing
var assignment = new Assignment("TypeScript Task", "John Doe", new Date("2026-03-01"));
assignment.setDueDate(new Date("2026-03-10"), true); // Instructor updates
assignment.publish();
// assignment.setDueDate(new Date("2026-03-20"), true); // Error: Cannot modify due date after publishing or if not instructor.
console.log(assignment.getType());
console.log("Due Date:", assignment.getDueDate());
