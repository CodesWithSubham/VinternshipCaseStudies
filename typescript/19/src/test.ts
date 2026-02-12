import "reflect-metadata";
import { Container } from "typedi";
import { NewsAggregator } from "./NewsAggregator";
import { MockNewsSource } from "./MockNewsSource";
import { NewsSourceToken } from "./NewsSource";

async function test() {
  Container.set(NewsSourceToken, new MockNewsSource());

  const aggregator = Container.get(NewsAggregator);
  const articles = await aggregator.getLatestArticles();

  console.assert(
    articles[0] === "Mock: Test Article",
    "Test failed"
  );

  console.log("Test passed ✅");
}

test();
