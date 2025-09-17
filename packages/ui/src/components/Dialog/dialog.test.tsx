import { render, screen } from "@testing-library/react";
import { Dialog } from ".";
import userEvent from "@testing-library/user-event";
describe("Dialog component", () => {
  it("Dialog component render correctly with default values", () => {
    render(
      <>
        <Dialog>
          <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        </Dialog>
      </>
    );

    expect(screen.queryByText(/^Open Dialog/)).toBeInTheDocument();
  });

  it("Dialog component when click dialog.trigger then check the dialog content is showing", async () => {
    render(
      <>
        <Dialog>
          <Dialog.Trigger>Open Dialog</Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>Title</Dialog.Title>
            <Dialog.Description>Description</Dialog.Description>
            <Dialog.Footer>
              <Dialog.Close>Close</Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>
      </>
    );

    const dialogTrigger = screen.getByRole("button", { name: /^Open Dialog/ });

    expect(dialogTrigger).toHaveTextContent(/^Open Dialog/);

    expect(screen.queryByText(/^Title?/)).not.toBeInTheDocument();
    expect(screen.queryByText(/^Description?/)).not.toBeInTheDocument();

    await userEvent.click(dialogTrigger);

    expect(screen.queryByText(/^Title?/)).toBeInTheDocument();
    expect(screen.queryByText(/^Description?/)).toBeInTheDocument();

    const closeTrigger = screen.getByRole("button", { name: /^Close/ });

    await userEvent.click(closeTrigger);

    expect(screen.queryByText(/Title?/)).not.toBeInTheDocument();
    expect(screen.queryByText(/^Description?/)).not.toBeInTheDocument();
  });
});
