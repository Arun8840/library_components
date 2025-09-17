import { fireEvent, render, screen } from "@testing-library/react";
import { Card } from ".";
import { Button } from "../Button";

describe("Card component", () => {
  it("Card component render withour any prop", () => {
    render(
      <>
        <Card>
          <Card.Header>
            <Card.Title>Card Title</Card.Title>
            <Card.Description>Card Description</Card.Description>
          </Card.Header>
          <Card.Content>
            <p>Card Content</p>
          </Card.Content>
          <Card.Footer>
            <Card.Action>Card Action</Card.Action>
          </Card.Footer>
        </Card>
      </>
    );

    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card Description")).toBeInTheDocument();
    expect(screen.getByText("Card Content")).toBeInTheDocument();
    expect(screen.getByText("Card Action")).toBeInTheDocument();
  });

  it("Calls the Card.action when onclick is clicked", async () => {
    const handleClick = jest.fn();
    render(
      <>
        <Card>
          <Card.Footer>
            <Card.Action>
              <Button onClick={handleClick}>Save</Button>
            </Card.Action>
          </Card.Footer>
        </Card>
      </>
    );

    const button = screen.getByRole("button", { name: /^Save/ });

    expect(button).toHaveTextContent("Save");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
