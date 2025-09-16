import { render, screen } from "@testing-library/react";
import { Input } from ".";

describe("Input Component comes with show label true", () => {
  it("renders default label text if no label prop is given", () => {
    render(<Input />);
    expect(screen.getByText("Label")).toBeInTheDocument();
  });
  it("renders label by default when showLabel is not provided", () => {
    render(<Input label="Username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("does not render label when showLabel is false", () => {
    render(<Input label="Username" showLabel={false} />);
    expect(screen.queryByText("Username")).not.toBeInTheDocument();
  });
});
