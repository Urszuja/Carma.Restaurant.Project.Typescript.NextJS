import MenuItem from "../MenuItem";
import { testMenuItem } from "../../../mocks/mockData";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("new menu item created", () => {
  render(
    <MenuItem
      name={testMenuItem.name}
      id={testMenuItem.id}
      prices={testMenuItem.prices}
      image={testMenuItem.image}
      description={testMenuItem.description}
      isSpicy={testMenuItem.isSpicy}
      isVegan={testMenuItem.isVegan}
    />
  );

  const name = screen.getByText(/Margharita/i);

  expect(name).toBeInTheDocument();
});
