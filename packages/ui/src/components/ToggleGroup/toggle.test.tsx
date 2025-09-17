import { render, screen } from "@testing-library/react";
import { ToggleGroup } from ".";
import userEvent from "@testing-library/user-event";
describe("Toggle group component", () => {
  it("Test Toggle group component render without props", () => {
    render(
      <>
        <ToggleGroup>
          <ToggleGroup.GroupItem value={"bold"}>B</ToggleGroup.GroupItem>
          <ToggleGroup.GroupItem value={"italic"}>I</ToggleGroup.GroupItem>
          <ToggleGroup.GroupItem value={"strikethrough"}>
            U
          </ToggleGroup.GroupItem>
        </ToggleGroup>
      </>
    );

    expect(screen.queryByText(/^B/)).toBeInTheDocument();
    expect(screen.queryByText(/^I/)).toBeInTheDocument();
    expect(screen.queryByText(/^U/)).toBeInTheDocument();
  });
  it("Toggle group component checked indicator", async () => {
    render(
      <>
        <ToggleGroup>
          <ToggleGroup.GroupItem value={"bold"}>B</ToggleGroup.GroupItem>
          <ToggleGroup.GroupItem value={"italic"}>I</ToggleGroup.GroupItem>
        </ToggleGroup>
      </>
    );

    const toggleTrigger = screen.getByRole("checkbox", { name: "B" });

    expect(toggleTrigger.tagName.toLowerCase()).toBe("input");
    expect(toggleTrigger).toHaveAttribute("type", "checkbox");
    expect(toggleTrigger).not.toBeChecked();

    const label = screen.getByText(/^B/).closest("label");
    expect(label).toBeInTheDocument();

    await userEvent.click(toggleTrigger);

    expect(toggleTrigger).toBeChecked();
    expect(label).toHaveClass(/^has-checked:bg-stone-200/);
  });

  it("Toggle group component has disabled prop", () => {
    render(
      <ToggleGroup>
        <ToggleGroup.GroupItem disabled={true} value="bold">
          B
        </ToggleGroup.GroupItem>
      </ToggleGroup>
    );

    const label = screen.getByText(/^B/).closest("label");
    expect(label).toBeInTheDocument();

    const toggleTrigger = screen.getByRole("checkbox", { name: "B" });

    expect(toggleTrigger.tagName.toLowerCase()).toBe("input");
    expect(toggleTrigger).toHaveAttribute("disabled");
    expect(toggleTrigger).toBeDisabled();

    // Check for disabled styles (if you added aria-disabled in your component)
    expect(label).toHaveAttribute("aria-disabled", "true");
  });
});
