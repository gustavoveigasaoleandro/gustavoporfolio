import { expect } from "@storybook/test";
import { Header } from "../stories/Organisms/Header/Header";

import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

describe("Header", () => {
  test("Should render 'Gustavo Veiga São Leandro'", () => {
    render(<Header />);
    const userName = screen.getByText("Gustavo");
    const userLastName = screen.getByText("Veiga São Leandro");
    expect(userName, userLastName).toBeInTheDocument();
  });

  test("Should render DrawerComponent", () => {
    render(<Header />);
    const drawerComponent = screen.getByTestId("drawer-component");
    expect(drawerComponent).toBeInTheDocument();
  });

  test("Should render DrawerComponent", () => {
    render(<Header />);
    const drawerComponent = screen.getByTestId("drawer-component");
    expect(drawerComponent).toBeInTheDocument();
  });
});
