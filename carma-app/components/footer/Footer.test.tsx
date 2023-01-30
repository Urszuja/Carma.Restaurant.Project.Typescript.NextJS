import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("testing footer functionality ", () => {
  test("footer is rendering correctly", () => {
    render(<Footer />);

    const devName = screen.getByText(/Urszuja/i);

    expect(devName).toBeInTheDocument();
  });
});
