import { SkillMeter } from "../stories/Organisms/SkillMeter/SkillMeter";
import { render, screen } from "@testing-library/react";

describe("SkillMeter", () => {
  test("Should display the correct progress when passed the value to the component", () => {
    const progressValue = 90;
    render(<SkillMeter progress={progressValue} skill={"html"} />);

    const progressBar = screen.getByTestId("progressBar");

    expect(progressBar).toHaveStyle(
      `transform: translateX(-${100 - progressValue}%)`
    );
  });
});
