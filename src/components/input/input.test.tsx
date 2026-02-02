import { fireEvent, render, screen } from "@testing-library/react";
import * as Input from ".";

describe("Input Component", () => {
  it("render Input ", () => {
    render(
      <Input.Root>
        <Input.Field type="text" placeholder="Enter text" />
      </Input.Root>,
    );

    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("Verify if Input call onChange event", async () => {
    const handleChange = jest.fn();
    render(
      <Input.Root>
        <Input.Field
          type="text"
          placeholder="Enter text"
          onChange={handleChange}
        />
      </Input.Root>,
    );

    const inputElement = screen.getByPlaceholderText("Enter text");
    fireEvent.change(inputElement, { target: { value: "love love" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("Check if input is disabled", async () => {
    render(
      <Input.Root>
        <Input.Field type="text" placeholder="Enter text" disabled />
      </Input.Root>,
    );

    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeDisabled();
  });
});
