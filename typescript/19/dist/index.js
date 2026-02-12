"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typedi_1 = require("typedi");
const NewsAggregator_1 = require("./NewsAggregator");
const RSSFeedSource_1 = require("./RSSFeedSource");
const APISource_1 = require("./APISource");
const NewsSource_1 = require("./NewsSource");
async function run() {
    // Register default implementation
    typedi_1.Container.set(NewsSource_1.NewsSourceToken, new RSSFeedSource_1.RSSFeedSource());
    const aggregator1 = typedi_1.Container.get(NewsAggregator_1.NewsAggregator);
    await aggregator1.getLatestArticles();
    console.log("---- Swapping to API Source ----");
    // Reset container to clear cached instances
    typedi_1.Container.reset();
    // Register new implementation
    typedi_1.Container.set(NewsSource_1.NewsSourceToken, new APISource_1.APISource());
    const aggregator2 = typedi_1.Container.get(NewsAggregator_1.NewsAggregator);
    await aggregator2.getLatestArticles();
}
run();
