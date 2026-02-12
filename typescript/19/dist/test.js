"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typedi_1 = require("typedi");
const NewsAggregator_1 = require("./NewsAggregator");
const MockNewsSource_1 = require("./MockNewsSource");
const NewsSource_1 = require("./NewsSource");
async function test() {
    typedi_1.Container.set(NewsSource_1.NewsSourceToken, new MockNewsSource_1.MockNewsSource());
    const aggregator = typedi_1.Container.get(NewsAggregator_1.NewsAggregator);
    const articles = await aggregator.getLatestArticles();
    console.assert(articles[0] === "Mock: Test Article", "Test failed");
    console.log("Test passed ✅");
}
test();
