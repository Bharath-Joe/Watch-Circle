import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import MyApp from "./MyApp";

test("renders learn react link", () => {
  render(<MyApp />);
  // successful test:
  const linkElement = screen.getAllByText(/Log In/i);
  // failing test:
  // const linkElement = screen.getByText(/Painter/i);
  expect(linkElement).toBeInTheDocument();
});