import { fireEvent, render, screen } from "@testing-library/react";
import { VerticalCarousel } from "../stories/Organisms/VerticalCarroussel/VerticalCarroussel";

// Mock do componente Slide
jest.mock("../stories/Organisms/Slide/Slide", () => {
  const MockSlide = ({ content, index }) => (
    <div data-testid={`slide-${index}`}>{content.type}</div>
  );
  MockSlide.displayName = "MockSlide"; // Define o displayName para evitar o aviso
  return MockSlide;
});

const slidesData = [
  { key: 1, type: "normal" },
  { key: 2, type: "normal" },
  { key: 3, type: "normal" },
];

describe("VerticalCarroussel", () => {
  test("Should change the slide when pressed the navigation button", () => {
    render(<VerticalCarousel slidesData={slidesData} />);

    const button = screen.getByTestId("navButton-2"); // Seleciona o botão
    fireEvent.click(button); // Simula o clique

    expect(button).toHaveClass("dot--active"); // Verifica se o botão tem a classe ativa
  });
});
