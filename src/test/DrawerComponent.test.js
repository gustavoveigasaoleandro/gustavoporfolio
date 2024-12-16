import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DrawerComponent } from "../stories/Molecules/Drawer/Drawer";

describe("Drawer", () => {
  test("Should display these options in DrawerComponent ", () => {
    render(<DrawerComponent />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const links = screen.getAllByTestId("Text-component");
    expect(links).toMatchSnapshot();
  });
});
