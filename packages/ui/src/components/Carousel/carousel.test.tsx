import { render, screen } from "@testing-library/react";
import { Carousel } from ".";
import userEvent from "@testing-library/user-event";
describe("Carousel component", () => {
  it("Carousel component render withour any errors", () => {
    render(
      <>
        <Carousel total={3}>
          <Carousel.Content>
            <Carousel.Item>1</Carousel.Item>
            <Carousel.Item>2</Carousel.Item>
            <Carousel.Item>3</Carousel.Item>
          </Carousel.Content>
        </Carousel>
      </>
    );

    expect(screen.getByText(/^1/)).toBeInTheDocument();
  });

  it("Carousel item changing correctly when click carousel action", async () => {
    render(
      <>
        <Carousel total={3}>
          <Carousel.Content>
            <Carousel.Item>1</Carousel.Item>
            <Carousel.Item>2</Carousel.Item>
            <Carousel.Item>3</Carousel.Item>
          </Carousel.Content>
        </Carousel>
      </>
    );

    const next = screen.getByRole("button", { name: "next" });
    const previous = screen.getByRole("button", { name: "previous" });

    expect(next).toHaveAttribute("aria-label", "next");
    expect(previous).toHaveAttribute("aria-label", "previous");

    expect(screen.queryByText(/^1/)).toBeInTheDocument();
    await userEvent.click(next);
    expect(screen.queryByText(/^2/)).toBeInTheDocument();

    await userEvent.click(previous);
    expect(screen.queryByText(/^1/)).toBeInTheDocument();
  });
});
