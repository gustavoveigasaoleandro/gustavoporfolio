import { act, fireEvent, render, screen } from "@testing-library/react";
import { Carroussel } from "../stories/Organisms/Carroussel/Carroussel";
jest.mock("react-spring-3d-carousel", () => ({
  __esModule: true,
  default: ({ slides, goToSlide }) => (
    <div>
      {slides.map((slide, index) => (
        <div
          key={index}
          data-testid={`slide-${index}`}
          className={goToSlide === index ? "active" : ""}
        >
          {slide.content}
        </div>
      ))}
    </div>
  ),
}));

describe("Carroussel", () => {
  test("Should change the slide when pressed the navegation button", async () => {
    render(<Carroussel />);

    const button = screen.getByTestId("navButton-2");
    await act(async () => {
      fireEvent.click(button);
    });

    const activeSlide = screen.getByTestId("slide-2");
    expect(activeSlide).toHaveClass("active");
    expect(button).toHaveClass("dot--active");
  });
});
