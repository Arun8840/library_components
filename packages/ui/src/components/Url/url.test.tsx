import { render, screen } from "@testing-library/react";
import { Url } from ".";
import userEvent from "@testing-library/user-event";
describe("Url component", () => {
  it("Url component render without any errors", () => {
    render(
      <>
        <Url label="Go to home" href="#" />
      </>
    );

    expect(screen.getByText(/^Go to home/)).toBeInTheDocument();
  });

  // it("navigates to the correct URL when the link is clicked", async () => {
  //   render(
  //     <>
  //       <Url label="Zetta stack" href="https://zettastack.com" />
  //     </>
  //   );

  //   const link = screen.getByRole("link", { name: "Zetta stack" });

  //   expect(link).toBeInTheDocument();
  //   expect(link).toHaveAttribute("href", "https://zettastack.com");

  //   // Mock window.location.assign
  //   const assignMock = jest.fn();
  //   const originalAssign = window.location.assign;
  //   window.location.assign = assignMock;

  //   await userEvent.click(link);

  //   // Simulate navigation (since JSDOM doesn't actually navigate)
  //   expect(assignMock).not.toHaveBeenCalled(); // anchor with href should not call assign directly
  //   // Instead, we can simulate navigation by checking the href
  //   expect(link.getAttribute("href")).toBe("https://zettastack.com");

  //   // Restore original assign
  //   window.location.assign = originalAssign;
  // });
});
