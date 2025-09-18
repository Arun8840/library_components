import { render, screen } from "@testing-library/react";
import { Stepper } from ".";
import userEvent from "@testing-library/user-event";
describe("Stepper component", () => {
  it("Stepper component render without any errors", () => {
    render(
      <>
        <Stepper active={1} maxStep={4} showAction={true}>
          <Stepper.List>
            <Stepper.Item>
              <div>stepper content</div>
            </Stepper.Item>
          </Stepper.List>
        </Stepper>
      </>
    );

    expect(screen.getByText(/^stepper content/));
  });

  it("applies active, maxStep, and showAction props correctly", async () => {
    render(
      <Stepper active={2} maxStep={2} showAction>
        <Stepper.List>
          <Stepper.Item>
            <div>Step 1</div>
          </Stepper.Item>
          <Stepper.Item>
            <div>Step 2</div>
          </Stepper.Item>
        </Stepper.List>
      </Stepper>
    );

    // ✅ Stepper items are rendered
    expect(screen.getByText("Step 1")).toBeInTheDocument();
    expect(screen.getByText("Step 2")).toBeInTheDocument();

    // ✅ Action buttons rendered because `showAction` is passed
    const nextBtn = screen.getByRole("button", { name: /next/i });
    const prevBtn = screen.getByRole("button", { name: /prev/i });

    expect(nextBtn).toBeInTheDocument();
    expect(prevBtn).toBeInTheDocument();
  });
});
