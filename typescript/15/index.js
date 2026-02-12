// 15 - Advanced Types
// ====================================================
//  (Optional) Programmer’s Workflow Checklist
// ====================================================
// Use union when a value can be one of many types.
var user = { id: "a1", accessLevel: "basic" };
var multiUser = {
    id: "i1",
    coursesTaught: 5,
    extraPermission: true,
};
// Use mapped and utility types to quickly reshape data.
var stats = {
    quizzes: "10",
    videos: "8",
    assignments: "4",
};
// Test your types with real data and scenarios.
var assignment = {
    title: "TypeScript Report",
    dueDate: new Date(),
    points: 100,
};
// assignment.points = 90; // index.ts:71:12 - error TS2540: Cannot assign to 'points' because it is a read-only property.
