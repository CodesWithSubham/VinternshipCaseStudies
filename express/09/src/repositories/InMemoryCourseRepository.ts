import { ICourseRepository } from "./interfaces/ICourseRepository";
import { Course } from "../models/Course";

export class InMemoryCourseRepository implements ICourseRepository {
  private courses: Course[] = [
    { id: "1", name: "Physics 101", capacity: 2, students: [] },
    { id: "2", name: "Math 101", capacity: 3, students: [] },
    { id: "3", name: "Chemistry 101", capacity: 4, students: [] },
  ];

  async findAll(): Promise<Course[]> {
    return this.courses;
  }

  async findById(id: string): Promise<Course | null> {
    return this.courses.find((course) => course.id === id) || null;
  }

  async save(course: Course): Promise<void> {
    const idx = this.courses.findIndex((c) => c.id === course.id);
    if (idx >= 0) {
      this.courses[idx] = course;
    } else {
      this.courses.push(course);
    }
  }

  async enrollStudent(courseId: string, studentId: string): Promise<void> {
    const course = await this.findById(courseId);
    if (course && !course.students.includes(studentId)) {
      course.students.push(studentId);
      await this.save(course);
    }
  }

  async findByStudentId(studentId: string): Promise<Course[]> {
    return this.courses.filter((course) => course.students.includes(studentId));
  }

  async delete(courseId: string): Promise<void> {
    this.courses = this.courses.filter((c) => c.id !== courseId);
  }
}
