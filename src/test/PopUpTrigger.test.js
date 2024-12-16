import { fireEvent, render, screen } from "@testing-library/react";
import { PopUpTrigger } from "../stories/Organisms/PopUpTrigger/PopUpTrigger";
import { expect } from "@storybook/test";
import { act } from "react";

describe("PopUpTrigger", () => {
  test("Should open the PopUp when clicked", async () => {
    render(<PopUpTrigger />);

    const component = screen.getByTestId("PopUpTrigger");

    expect(component).not.toHaveTextContent("Vamos conversar");

    const button = screen.getByTestId("PopUpButton");

    await act(async () => {
      fireEvent.click(button);
    });

    expect(component).toHaveTextContent("Vamos conversar");
  });
});
