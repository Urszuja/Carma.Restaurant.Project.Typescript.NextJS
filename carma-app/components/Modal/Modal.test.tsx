import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "./Modal";

describe("testing modal functionality ", () => {
  test("test component is rendering correctly in modal", () => {
    const handleClose = jest.fn();

    // Act
    const { getByText } = render(
      <>
        <div id="modal-root"></div>

        <Modal onClose={handleClose} show={true}>
          <div>test</div>
        </Modal>
      </>
    );
    // Assert
    expect(getByText("test")).toBeTruthy();

    // Act
    fireEvent.click(screen.getByAltText(/close/i));

    // Assert
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("test component is rendering correctly in modal", () => {
    const handleClose = jest.fn();

    render(
      <>
        <div id="modal-root"></div>

        <Modal onClose={handleClose} show={true}>
          <div>test</div>
        </Modal>
      </>
    );

    // Act
    fireEvent.click(screen.getByAltText(/close/i));

    // Assert
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
