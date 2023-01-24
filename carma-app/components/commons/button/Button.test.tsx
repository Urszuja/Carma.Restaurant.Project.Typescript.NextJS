import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("testing button functionality", () => {
  test("button shows text and can be clicked", () => {
    const handleClick = jest.fn();
    render(<Button type="button" text="Confirm" onClick={handleClick} />);

    const button = screen.getByText(/confirm/i);
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
