import "reflect-metadata";
import { Container } from "typedi";
import { NewsAggregator } from "./NewsAggregator";
import { RSSFeedSource } from "./RSSFeedSource";
import { APISource } from "./APISource";
import { NewsSourceToken } from "./NewsSource";

async function run() {
  // Register default implementation
  Container.set(NewsSourceToken, new RSSFeedSource());

  const aggregator1 = Container.get(NewsAggregator);
  await aggregator1.getLatestArticles();

  console.log("---- Swapping to API Source ----");

  // Reset container to clear cached instances
  Container.reset();

  // Register new implementation
  Container.set(NewsSourceToken, new APISource());

  const aggregator2 = Container.get(NewsAggregator);
  await aggregator2.getLatestArticles();
}

run();
