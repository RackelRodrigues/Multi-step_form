import { getByRole, getByTitle, render } from "@testing-library/react";
import Planners from ".";
import { screen } from "@testing-library/react";

describe("Planners Component", () => {
  it("renders planner name and image", () => {
    const handleClick = jest.fn();
    render(
      <Planners
        name="Basic Plan"
        priceMonth={10}
        priceYear={100}
        imageURL="http://example.com/image.png"
        isActive={false}
        onClick={handleClick}
        hasFrequency={true}
      />,
    );

    const plannerElement = screen.getByText("Basic Plan");
    expect(plannerElement).toBeInTheDocument();

    const plannerImg = screen.getByAltText(/Basic Plan/i);
    expect(plannerImg).toBeInTheDocument();
  });
  it("shows yearly price when frequency is enabled", () => {
    render(
      <Planners
        name="Basic Plan"
        priceMonth={10}
        priceYear={100}
        imageURL="http://example.com/image.png"
        isActive={false}
        onClick={jest.fn()}
        hasFrequency={true}
      />,
    );

    expect(screen.getByText("$100/yr")).toBeInTheDocument();
    expect(screen.getByText("2 months free")).toBeInTheDocument();
    expect(screen.queryByText("$10/mo")).not.toBeInTheDocument();
  });
  it("shows monthly price when frequency is enabled", () => {
    render(
      <Planners
        name="Basic Plan"
        priceMonth={10}
        priceYear={100}
        imageURL="http://example.com/image.png"
        isActive={false}
        onClick={jest.fn()}
        hasFrequency={false}
      />,
    );

    expect(screen.getByText("$10/mo")).toBeInTheDocument();
  });
  it("verify Planners call handleClick function", () => {
    const handleClick = jest.fn();
    render(
      <Planners
        name="Basic Plan"
        priceMonth={10}
        priceYear={100}
        imageURL="http://example.com/image.png"
        isActive={false}
        onClick={handleClick}
        hasFrequency={true}
      />,
    );
    const plannerElement = screen.getByText("Basic Plan");
    plannerElement.click();
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders Planners component as active", () => {
    const handleClick = jest.fn();
    const Planner = render(
      <Planners
        name="Basic Plan"
        priceMonth={10}
        priceYear={100}
        imageURL="http://example.com/image.png"
        isActive={false}
        onClick={handleClick}
        hasFrequency={true}
      />,
    );

    expect(Planner.container.firstChild).toHaveClass("notActive");
  });
});
