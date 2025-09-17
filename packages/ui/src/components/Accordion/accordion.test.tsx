import { render, screen } from "@testing-library/react";
import { Accordion } from ".";
import userEvent from "@testing-library/user-event";
describe("Accordion component", () => {
  it("Accordion component render without any props", () => {
    render(
      <>
        <Accordion defaultOpen="1">
          <Accordion.Item>
            <Accordion.Trigger triggerId="1">
              Accordion trigger
            </Accordion.Trigger>
            <Accordion.Content value="1">
              <p>Accordion content</p>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </>
    );

    expect(screen.getByText("Accordion trigger")).toBeInTheDocument();
    expect(screen.getByText("Accordion content")).toBeInTheDocument();
  });

  it("Accordion component accordion.trigger and accordion.content events", async () => {
    render(
      <Accordion defaultOpen="1">
        <Accordion.Item>
          <Accordion.Trigger triggerId="1">Accordion trigger</Accordion.Trigger>
          <Accordion.Content value="1">
            <p>Accordion content</p>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    const accordionTrigger = screen.getByRole("button", {
      name: "Accordion trigger",
    });

    // Accordion content should be visible initially
    expect(screen.getByText("Accordion content")).toBeInTheDocument();

    // Click to close
    await userEvent.click(accordionTrigger);

    // Accordion content should not be visible after closing
    expect(screen.queryByText("Accordion content")).not.toBeInTheDocument();

    // Click to open again
    await userEvent.click(accordionTrigger);

    // Accordion content should be visible again
    expect(screen.getByText("Accordion content")).toBeInTheDocument();
  });

  it("Accordion works correctly with collapsible prop", async () => {
    render(
      <Accordion defaultOpen="1" collapsible>
        <Accordion.Item>
          <Accordion.Trigger triggerId="1">
            Accordion trigger1
          </Accordion.Trigger>
          <Accordion.Content value="1">
            <p>Accordion content1</p>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Trigger triggerId="2">
            Accordion trigger2
          </Accordion.Trigger>
          <Accordion.Content value="2">
            <p>Accordion content2</p>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    const accordionTrigger1 = screen.getByRole("button", {
      name: "Accordion trigger1",
    });
    const accordionTrigger2 = screen.getByRole("button", {
      name: "Accordion trigger2",
    });

    // Only the first content should be visible initially
    expect(screen.getByText("Accordion content1")).toBeInTheDocument();
    expect(screen.queryByText("Accordion content2")).not.toBeInTheDocument();

    // Click to close the first item
    await userEvent.click(accordionTrigger1);
    expect(screen.queryByText("Accordion content1")).not.toBeInTheDocument();

    // Click to open the first item again
    await userEvent.click(accordionTrigger1);
    expect(screen.getByText("Accordion content1")).toBeInTheDocument();

    // Click to open the second item (should close the first)
    await userEvent.click(accordionTrigger2);
    expect(screen.getByText("Accordion content2")).toBeInTheDocument();

    await userEvent.click(accordionTrigger1);
    expect(screen.queryByText("Accordion content1")).not.toBeInTheDocument();

    await userEvent.click(accordionTrigger2);
    expect(screen.queryByText("Accordion content2")).not.toBeInTheDocument();
  });
});
