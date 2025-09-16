import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button Component", () => {
  it("applies primary styles by default", () => {
    render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-[var(--primary)]");
  });

  it("applies secondary styles when variant=secondary", () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-[var(--secondary)]");
  });

  it("applies outlined styles when variant=outlined", () => {
    render(<Button variant="outline">Outlined</Button>);
    expect(screen.getByRole("button")).toHaveClass(
      "bg-transparent border-gray-400"
    );
  });

  it("applies success styles when variant=success", () => {
    render(<Button variant="success">Success</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-[var(--success)]");
  });

  it("applies danger styles when variant=danger", () => {
    render(<Button variant="danger">Danger</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-[var(--danger)]");
  });

  it("renders default text when no children provided", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toHaveTextContent("Button");
  });
});
