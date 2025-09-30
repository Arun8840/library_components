import { render, screen, within } from "@testing-library/react";
import { Table } from ".";

describe("Table component", () => {
  it("renders table with caption, headers, and cells", () => {
    render(
      <Table>
        <Table.Caption>A list of your recent invoices.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Head 1</Table.Head>
            <Table.Head>Head 2</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Data 1</Table.Cell>
            <Table.Cell>Data 2</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );

    // Check caption
    expect(
      screen.getByText("A list of your recent invoices.")
    ).toBeInTheDocument();

    // Check headers
    expect(
      screen.getByRole("columnheader", { name: "Head 1" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Head 2" })
    ).toBeInTheDocument();

    // Check cells
    expect(screen.getByRole("cell", { name: "Data 1" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "Data 2" })).toBeInTheDocument();

    // Check table structure
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();

    // Check row count (1 header row + 1 body row)
    const rows = within(table).getAllByRole("row");
    expect(rows.length).toBe(2);
  });
});
