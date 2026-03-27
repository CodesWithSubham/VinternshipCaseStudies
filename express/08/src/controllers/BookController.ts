// src/controllers/BookController.ts
import { Request, Response } from "express";
import { BookService } from "../services/BookService";

export class BookController {
  constructor(private bookService: BookService) {}

  async borrowBook(req: Request, res: Response): Promise<void> {
    try {
      // verify that the book ID is provided
      const id = req.params.id;
      if (!id || typeof id !== "string") {
        throw new Error("Invalid book ID");
      }
      
      const book = await this.bookService.borrowBook(id);
      res.json(book);
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : "Invalid book ID" });
    }
  }

  async returnBook(req: Request, res: Response): Promise<void> {
    try {
      // verify that the book ID is provided
      const id = req.params.id;
      if (!id || typeof id !== "string") {
        throw new Error("Invalid book ID");
      }
      
      const book = await this.bookService.returnBook(id);
      res.json(book);
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : "Invalid book ID" });
    }
  }
}
