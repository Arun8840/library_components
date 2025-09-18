import { render, screen } from "@testing-library/react";
import { Tooltip } from ".";
import userEvent from "@testing-library/user-event";
describe("Tooltip component", () => {
  it("Tooltip component render without any errors", () => {
    render(
      <>
        <Tooltip>
          <Tooltip.Trigger>✨ Hover me</Tooltip.Trigger>
          <Tooltip.Content>
            <p className="text-center">✨ Add to library </p>
          </Tooltip.Content>
        </Tooltip>
      </>
    );

    expect(screen.getByText(/^✨ Hover me/));
  });
  it("shows and hides tooltip content on hover and unhover", async () => {
    render(
      <Tooltip>
        <Tooltip.Trigger>✨ Hover me</Tooltip.Trigger>
        <Tooltip.Content>
          <p>✨ Tooltip Content</p>
        </Tooltip.Content>
      </Tooltip>
    );

    const trigger = screen.getByText(/^✨ Hover me/);

    expect(trigger).toBeInTheDocument();

    // Tooltip content should not be visible initially
    expect(screen.queryByText(/^✨ Tooltip Content/)).not.toBeInTheDocument();

    await userEvent.hover(trigger);

    // Tooltip content should appear on hover
    expect(await screen.findByText(/^✨ Tooltip Content/)).toBeInTheDocument();

    await userEvent.unhover(trigger);

    // Tooltip content should disappear after unhover
    expect(screen.queryByText(/^✨ Tooltip Content/)).not.toBeInTheDocument();
  });
});
