// src/repositories/InMemoryBookRepository.ts
import { IBookRepository } from "./interfaces/IBookRepository";
import { Book } from "../models/Book";

export class InMemoryBookRepository implements IBookRepository {
  private books: Book[] = [
    {
      id: "1",
      title: "Book 1",
      author: "Author 1",
      isBorrowed: false,
    },
    {
      id: "2",
      title: "Book 2",
      author: "Author 2",
      isBorrowed: false,
    },
    {
      id: "3",
      title: "Book 3",
      author: "Author 3",
      isBorrowed: true,
    },
  ];

  async findAll(): Promise<Book[]> {
    return this.books;
  }

  async findById(id: string): Promise<Book | null> {
    return this.books.find((book) => book.id === id) || null;
  }

  async save(book: Book): Promise<void> {
    this.books = this.books.map((b) => (b.id === book.id ? book : b));
  }
}
