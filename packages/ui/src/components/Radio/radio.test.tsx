import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Radio } from ".";

describe("Radio component", () => {
  it("renders correctly when no props are provided", () => {
    render(<Radio />);
    const radio = screen.getByRole("radio");
    expect(radio).toBeInTheDocument();
    expect(radio).not.toBeChecked();
    expect(radio.closest("label")).toBeInTheDocument();
  });
  it("renders correctly with label provided", () => {
    render(
      <Radio
        label="Accept terms and conditions"
        description="By clicking this checkbox, you agree to the terms and conditions."
      />
    );

    // Strict check: label must exist
    const labelEl = screen.getByText(/^Accept terms and conditions$/);
    expect(labelEl).toBeInTheDocument();
  });
  it("renders the description when provided", () => {
    render(
      <Radio
        label="Accept terms and conditions"
        description="By clicking this checkbox, you agree to the terms and conditions."
      />
    );
    expect(screen.getByText(/you agree to the terms/i)).toBeInTheDocument();
  });

  it("renders the radio as disabled with correct style class", () => {
    render(<Radio disabled />);
    const radio = screen.getByRole("radio");
    expect(radio).toBeDisabled();
    expect(radio.closest("label")).toHaveClass("opacity-50 cursor-not-allowed");
  });

  it("toggles radio when the label test is clicked", async () => {
    render(<Radio id="terms" label="Accept Terms" />);

    const radio = screen.getByRole("radio", { name: /accept terms/i });

    expect(radio).not.toBeChecked();

    await userEvent.click(screen.getByText(/accept terms$/i));

    expect(radio).toBeChecked();
  });

  it("only allows one radio to be checked at a time when sharing the same name", async () => {
    render(
      <>
        <Radio label="Option A" name="group1" />
        <Radio label="Option B" name="group1" />
      </>
    );

    const optionA = screen.getByRole("radio", { name: "Option A" });
    const optionB = screen.getByRole("radio", { name: "Option B" });

    expect(optionA).not.toBeChecked();
    expect(optionB).not.toBeChecked();

    await userEvent.click(optionA);
    expect(optionA).toBeChecked();
    expect(optionB).not.toBeChecked();

    await userEvent.click(optionB);
    expect(optionB).toBeChecked();
    expect(optionA).not.toBeChecked();
  });
});
