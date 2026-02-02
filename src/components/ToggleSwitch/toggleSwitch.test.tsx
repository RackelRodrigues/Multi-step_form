import ToggleSwitch from ".";
import { render } from "@testing-library/react";

describe("ToggleSwitch Component", () => {
  const names = ["Monthly", "Yearly"];

  it("renders ToggleSwitch component", () => {
    render(<ToggleSwitch names={names} />);

    const labelMonthly = document.querySelector("span");
    expect(labelMonthly).toBeInTheDocument();
    expect(labelMonthly).toHaveTextContent("Monthly");

    const labelYearly = document.querySelectorAll("span")[2];
    expect(labelYearly).toBeInTheDocument();
    expect(labelYearly).toHaveTextContent("Yearly");
  });
});
