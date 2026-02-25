import { render, screen, fireEvent } from "@testing-library/react";
import { ArticleApproval } from "../components/ArticleApproval";

test("shows Approved after clicking", () => {
  render(
    <ArticleApproval
      article={{ title: "News", author: "Editor" }}
    />
  );

  fireEvent.click(screen.getByText("Approve"));

  expect(screen.getByText("Approved!")).toBeInTheDocument();
});
