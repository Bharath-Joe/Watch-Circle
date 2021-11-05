import { render, screen } from "@testing-library/react";
import MyApp from "./MyApp";

test("renders learn react link", () => {
  render(<MyApp />);
  // successful test:
  const linkElement = screen.getByText(/Log In/i);
  // failing test:
  // const linkElement = screen.getByText(/Painter/i);
  expect(linkElement).toBeInTheDocument();
});