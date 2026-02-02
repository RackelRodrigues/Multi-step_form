import Steps from ".";
import { render, screen } from "@testing-library/react";

describe("Steps Component", () => {
  it("renders step name and number", () => {
    render(
      <Steps namePlan="Select your plan" stepNumber={2} isActive={true} />,
    );
    const stepNameElement = screen.getByText("Select your plan");
    expect(stepNameElement).toBeInTheDocument();
    const stepNumberElement = screen.getByText("2");
    expect(stepNumberElement).toBeInTheDocument();
  });

  it("applies active class when isActive is true", () => {
    const step = render(
      <Steps namePlan="Select your plan" stepNumber={2} isActive={true} />,
    );

    expect(step.container.querySelector("span")).toHaveClass("active");
  });
});
