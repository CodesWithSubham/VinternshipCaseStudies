// 17 - Classes & Access Modifiers

// Abstract class: the blueprint for all content
abstract class Content {
  public readonly title: string;
  public readonly author: string;
  private published: boolean = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public publish(): void {
    this.published = true;
  }

  protected isPublished(): boolean {
    return this.published;
  }

  abstract getType(): string;
}

// Create an Assignment class extending Content.
class Assignment extends Content {
  private dueDate: Date;

  constructor(title: string, author: string, dueDate: Date) {
    super(title, author);
    this.dueDate = dueDate;
  }

  // only instructors to set or update the due date before publishing.
  public setDueDate(newDate: Date, isInstructor: boolean): void {
    if (!this.isPublished() && isInstructor) {
      this.dueDate = newDate;
    } else {
      throw new Error("Cannot modify due date after publishing or if not instructor.");
    }
  }

  public getDueDate(): Date {
    return this.dueDate;
  }

  getType(): string {
    return "Assignment";
  }
}

// Testing
const assignment = new Assignment("TypeScript Task", "John Doe", new Date("2026-03-01"));

assignment.setDueDate(new Date("2026-03-10"), true); // Instructor updates
assignment.publish();

// assignment.setDueDate(new Date("2026-03-20"), true); // Error: Cannot modify due date after publishing or if not instructor.

console.log(assignment.getType());
console.log("Due Date:", assignment.getDueDate());

// Output:
// Assignment
// Due Date: 2026-03-10T00:00:00.000Z
