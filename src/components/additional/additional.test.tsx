import Additional from ".";
import { render, screen } from "@testing-library/react";

describe("Aditional Component", () => {
  it("renders Aditional name and price", () => {
    const handleClick = jest.fn();

    render(
      <Additional
        id={1}
        name="Extra Storage"
        description="Additional 1TB of cloud storage"
        priceMonth={15}
        priceYear={150}
        ischecked={false}
        onClick={handleClick}
      />,
    );

    const additionalElement = screen.getByText("Extra Storage");
    expect(additionalElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(
      /Additional 1TB of cloud storage/i,
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  it("shows yearly price when frequency is enabled", () => {
    const handleClick = jest.fn();

    render(
      <Additional
        id={1}
        name="Extra Storage"
        description="Additional 1TB of cloud storage"
        priceMonth={0}
        priceYear={150}
        ischecked={true}
        onClick={handleClick}
      />,
    );

    expect(screen.getByText("+$150/yr")).toBeInTheDocument();
  });

  it("renders Aditional component as active", () => {
    const handleClick = jest.fn();
    const additional = render(
      <Additional
        id={1}
        name="Extra Storage"
        description="Additional 1TB of cloud storage"
        priceMonth={0}
        priceYear={150}
        ischecked={true}
        onClick={handleClick}
      />,
    );
    expect(additional.container.firstChild).toHaveClass("active");
  });
});
