"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockNewsSource = void 0;
// Mock for testing
class MockNewsSource {
    async fetchArticles() {
        return ["Mock: Test Article"];
    }
}
exports.MockNewsSource = MockNewsSource;
