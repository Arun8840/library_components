import { render, screen } from "@testing-library/react";
import { Switch } from ".";
import userEvent from "@testing-library/user-event";
describe("Switch component", () => {
  it("Switch component render without any errors", () => {
    render(<Switch />);

    // Since the Switch component does not have an accessible name, we should get the checkbox by role only
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox.closest("label")).toBeInTheDocument();
  });
  it("Switch component when click active and deactive", async () => {
    render(<Switch name="Switch" />);

    const checkbox = screen.getByRole("checkbox", { name: /switch/i });

    expect(checkbox).toHaveAttribute("aria-label", "Switch");
    expect(checkbox.closest("label")).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });
});
