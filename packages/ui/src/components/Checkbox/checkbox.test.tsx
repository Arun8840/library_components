import { render, screen } from "@testing-library/react";
import { Checkbox } from ".";
import userEvent from "@testing-library/user-event";

describe("Checkbox component", () => {
  it("renders correctly when no props are provided", () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    expect(checkbox.closest("label")).toBeInTheDocument();
  });

  it("renders the label when provided", () => {
    render(
      <Checkbox
        label="Accept terms and conditions"
        description="By clicking this checkbox, you agree to the terms and conditions."
      />
    );
    expect(
      screen.getByText(/accept terms and conditions/i)
    ).toBeInTheDocument();
  });

  it("renders the description when provided", () => {
    render(
      <Checkbox
        label="Accept terms and conditions"
        description="By clicking this checkbox, you agree to the terms and conditions."
      />
    );
    expect(screen.getByText(/you agree to the terms/i)).toBeInTheDocument();
  });

  it("renders the checkbox as disabled with correct style class", () => {
    render(<Checkbox disabled />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeDisabled();
    expect(checkbox.closest("label")).toHaveClass(
      "opacity-50 cursor-not-allowed"
    );
  });

  it("toggles checkbox when the label test is clicked", async () => {
    render(<Checkbox id="terms" label="Accept Terms" />);

    const checkbox = screen.getByRole("checkbox", { name: /accept terms/i });

    expect(checkbox).not.toBeChecked();

    await userEvent.click(screen.getByText(/accept terms$/i));

    expect(checkbox).toBeChecked();
  });
});
