import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormModal from "../FormModal";

describe("test form modal functionality", () => {
  test("modal shows confirmation, if order sent correctly", () => {
    render(<FormModal isSuccess={true} />);

    const confirmation = screen.getByText(/successfully/i);

    expect(confirmation).toBeInTheDocument();
  });

  test("modal shows fail, if order sending fails", () => {
    render(<FormModal isSuccess={false} />);

    const confirmation = screen.getByText(/wrong/i);

    expect(confirmation).toBeInTheDocument();
  });
});
