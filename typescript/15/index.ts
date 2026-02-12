// 15 - Advanced Types

// Base Types
type Instructor = { id: string; coursesTaught: number };
type Admin = { id: string; accessLevel: "basic" | "super" };

// ====================================================
// type InstructorOrAdmin that can be either an Instructor or an Admin.
// ====================================================
type InstructorOrAdmin = Instructor | Admin;

// ====================================================
// Create ReadonlyAssignment
// ====================================================

// Given a type Assignment
type Assignment = { title: string; dueDate: Date; points: number };

// create a type ReadonlyAssignment
type ReadonlyAssignment = Readonly<Assignment>;

// ====================================================
// Create StatsAsStrings
// ====================================================

// Given a type LearnerStats
type LearnerStats = { quizzes: number; videos: number; assignments: number };

// create a type StatsAsStrings
type StatsAsStrings = {
  [K in keyof LearnerStats]: string;
};

// ====================================================
//  (Optional) Programmer’s Workflow Checklist
// ====================================================

// Use union when a value can be one of many types.
const user: InstructorOrAdmin = { id: "a1", accessLevel: "basic" };

// Use intersection when you need all properties from multiple types.
type MultiRoleUser = Instructor & { extraPermission: boolean };

const multiUser: MultiRoleUser = {
  id: "i1",
  coursesTaught: 5,
  extraPermission: true,
};

// Use mapped and utility types to quickly reshape data.
const stats: StatsAsStrings = {
  quizzes: "10",
  videos: "8",
  assignments: "4",
};

// Use conditional types for smart, rules-based types.
type ModuleStatus = "not-started" | "in-progress" | "completed";

type FeedbackAllowed<T extends ModuleStatus> = T extends "completed" ? string : never;

type Feedback1 = FeedbackAllowed<"completed">;
type Feedback2 = FeedbackAllowed<"in-progress">;

// Test your types with real data and scenarios.
const assignment: ReadonlyAssignment = {
  title: "TypeScript Report",
  dueDate: new Date(),
  points: 100,
};

// assignment.points = 90; // index.ts:71:12 - error TS2540: Cannot assign to 'points' because it is a read-only property.
