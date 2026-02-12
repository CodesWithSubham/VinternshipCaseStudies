import { Token } from "typedi";

// Interface (compile-time only)
export interface NewsSource {
  fetchArticles(): Promise<string[]>;
}

// Runtime injection token
export const NewsSourceToken = new Token<NewsSource>("NewsSource");
