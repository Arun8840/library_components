import { render, screen } from "@testing-library/react";
import { Badge } from ".";

describe("Badge component", () => {
  it("Badge component render without any errors", () => {
    render(<Badge>Badge</Badge>);

    const badge = screen.getByRole("button", { name: /^Badge/ });
    expect(badge).toHaveTextContent(/^Badge/);
  });

  it("Badge component renders with all variant props and correct classes", () => {
    render(
      <>
        <Badge variant="default">Default</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
      </>
    );

    expect(screen.getByRole("button", { name: "Default" })).toHaveClass(
      "bg-gray-200",
      "text-gray-800"
    );
    expect(screen.getByRole("button", { name: "Success" })).toHaveClass(
      "bg-green-100",
      "text-green-800"
    );
    expect(screen.getByRole("button", { name: "Warning" })).toHaveClass(
      "bg-yellow-100",
      "text-yellow-800"
    );
    expect(screen.getByRole("button", { name: "Danger" })).toHaveClass(
      "bg-red-100",
      "text-red-800"
    );
  });
});
