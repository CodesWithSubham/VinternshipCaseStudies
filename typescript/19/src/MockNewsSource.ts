import { NewsSource } from "./NewsSource";

// Mock for testing
export class MockNewsSource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["Mock: Test Article"];
  }
}
