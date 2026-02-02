import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from ".";

describe("Button Component", () => {
  it("renders primary button with text", () => {
    render(<Button className="primary">Click Me</Button>);

    const button = screen.getByRole("button", { name: "Click Me" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("primary");
  });
  it("renders secondary button with text", () => {
    render(<Button className="secondary">secondary</Button>);

    const button = screen.getByRole("button", { name: "secondary" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("secondary");
  });
  it("renders terciary button with text", () => {
    render(<Button className="terciary">terciary</Button>);

    const button = screen.getByRole("button", { name: "terciary" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("terciary");
  });

  it("calls onClick handler when clicked", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const bntprimary = screen.getByRole("button", { name: "Click Me" });
    fireEvent.click(bntprimary);

    expect(handleClick).toHaveBeenCalled();
  });

  it('disables the button when "disabled" prop is true', async () => {
    render(<Button disabled>Click Me</Button>);

    const button = screen.getByRole("button", { name: "Click Me" });
    expect(button).toBeDisabled();
  });
});
