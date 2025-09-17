import { render, screen } from "@testing-library/react";
import { Slider } from ".";

describe("Slider component", () => {
  it("should render without any error", () => {
    render(<Slider />);
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  it("Slider component render with variant props", () => {
    render(<Slider variant="primary" />);
    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("type", "range");
    expect(slider).toHaveClass("accent-blue-500");
  });
});
