// Case Study 08: MVC Pattern

import express, { type NextFunction, type Request, type Response } from "express";

import { InMemoryBookRepository } from "./repositories/InMemoryBookRepository";
import { BookService } from "./services/BookService";
import { BookController } from "./controllers/BookController";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

// Initialize components
const bookRepository = new InMemoryBookRepository();
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);

// Routes
app.post("/books/:id/borrow", (req, res) => bookController.borrowBook(req, res));
app.post("/books/:id/return", (req, res) => bookController.returnBook(req, res));

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
