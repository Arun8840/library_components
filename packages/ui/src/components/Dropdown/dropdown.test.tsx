import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dropdown } from ".";

describe("Dropdown component", () => {
  it("Dropdown component render correctly without any props", () => {
    const defaultDropdownItems = [
      { key: "item1", value: "Item 1" },
      { key: "item2", value: "Item 2" },
      { key: "item3", value: "Item 3" },
    ];
    render(
      <>
        <Dropdown className="w-80">
          <Dropdown.Trigger>Select</Dropdown.Trigger>
          <Dropdown.Content>
            {defaultDropdownItems.map((item) => (
              <Dropdown.Item key={item.key}>{item.value}</Dropdown.Item>
            ))}
          </Dropdown.Content>
        </Dropdown>
      </>
    );

    expect(screen.getByText("Select")).toBeInTheDocument();
  });
  it("Dropdown renders with dropdown.items data props", async () => {
    const defaultDropdownItems = [
      { key: "item1", value: "Item 1" },
      { key: "item2", value: "Item 2" },
      { key: "item3", value: "Item 3" },
    ];
    render(
      <Dropdown className="w-80">
        <Dropdown.Trigger>Select Items</Dropdown.Trigger>
        <Dropdown.Content>
          {defaultDropdownItems.map((item) => (
            <Dropdown.Item key={item.key}>{item.value}</Dropdown.Item>
          ))}
        </Dropdown.Content>
      </Dropdown>
    );

    const dropdownTrigger = screen.getByRole("button", {
      name: "Select Items",
    });
    expect(dropdownTrigger).toHaveTextContent(/^Select Items/);

    // Item1 should not be visible initially
    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();

    // Click trigger
    await userEvent.click(dropdownTrigger);

    // Now Item1 should be in the document
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });
});
