import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("testing button functionality", () => {
  const handleClick = jest.fn();
  test("button has name", () => {
    render(<Button type="button" text="Confirm" onClick={handleClick} />);

    const label = screen.getByText(/confirm/i);

    expect(label).toBeInTheDocument();
  });
});
