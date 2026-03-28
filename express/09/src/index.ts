// Case Study 09: Repository Pattern

import express, { type NextFunction, type Request, type Response } from "express";
import { InMemoryCourseRepository } from "./repositories/InMemoryCourseRepository";
import { CourseService } from "./services/CourseService";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

const courseRepo = new InMemoryCourseRepository();
const courseService = new CourseService(courseRepo);

app.post("/courses/:id/enroll", async (req, res) => {
  try {
    const result = await courseService.enroll(req.params.id, req.body.studentId);
    res.json(result);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

app.get("/students/:id/courses", async (req, res) => {
  const courses = await courseService.getStudentCourses(req.params.id);
  res.json(courses);
});

app.delete("/courses/:id", async (req, res) => {
  try {
    const result = await courseService.deleteCourse(req.params.id);
    res.json(result);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

// error handling middleware
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);

  return res
    .status(500)
    .json({ error: err instanceof Error ? err.message : "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
