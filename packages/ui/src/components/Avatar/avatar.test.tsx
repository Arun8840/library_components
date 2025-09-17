import { render, screen } from "@testing-library/react";
import { Avatar } from ".";
{
  /* <Avatar src={"https://github.com/shadcn.png"} fallBack="ZS" />
<Avatar
  disabled
  src={"https://github.com/shadcn.png"}
  fallBack="Iam disabled one."
/> */
}
describe("Avatar component", () => {
  it("renders correctly", () => {
    const { container } = render(<Avatar />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("Avatar image showing when give the src prop", () => {
    render(<Avatar src={"https://github.com/shadcn.png"} fallBack="GI" />);

    const img = screen.getByRole("img", { name: "GI" });
    expect(img.tagName.toLowerCase()).toBe("img");
    expect(img).toHaveAttribute("src", "https://github.com/shadcn.png");
  });

  it("Avatar image showing when without src renter with fallback prop", () => {
    render(<Avatar src={null} fallBack="ZS" />);

    expect(screen.getByText("ZS")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("Avatar is disabled to test correct style", () => {
    render(
      <Avatar src={"https://github.com/shadcn.png"} fallBack="ZS" disabled />
    );
    const img = screen.getByRole("img");
    expect(img.tagName.toLowerCase()).toBe("img");
    expect(img).toHaveAttribute("aria-disabled", "true");
    expect(img.className).toContain(
      "aria-disabled:grayscale-100 aria-disabled:opacity-75 aria-disabled:cursor-not-allowed"
    );
  });
});
