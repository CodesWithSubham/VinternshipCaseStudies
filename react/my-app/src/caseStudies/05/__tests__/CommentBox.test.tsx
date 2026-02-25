import { render, screen, fireEvent } from "@testing-library/react";
import { CommentBox } from "../components/CommentBox";

test("posts comment and clears input", () => {
  const mockPost = jest.fn();

  render(<CommentBox onPost={mockPost} />);

  const input = screen.getByPlaceholderText("Write comment...");
  const button = screen.getByText("Post");

  fireEvent.change(input, { target: { value: "Hello World" } });
  fireEvent.click(button);

  expect(mockPost).toHaveBeenCalledWith("Hello World");
  expect((input as HTMLInputElement).value).toBe("");
});
