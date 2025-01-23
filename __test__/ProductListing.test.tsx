import { render, screen } from "@testing-library/react";
import ProductListing from "../src/app/productlisting/page"; // Adjust the path based on your file structure

// Mock child components to isolate the page
jest.mock("../src/app/components/ceramics", () => () => <div data-testid="ceramics">Ceramics Component</div>);
jest.mock("../src/app/components/category", () => () => <div data-testid="category">Category Component</div>);
jest.mock("../src/app/components/popular", () => () => <div data-testid="popular">Popular Component</div>);

describe("ProductListing Page", () => {
  test("renders all sections correctly", () => {
    render(<ProductListing />);

    // Check if the main image is rendered
    const image = screen.getByAltText("product cover picture");
    expect(image).toBeInTheDocument();

    // Check if the dropdowns are rendered
    const dropdowns = screen.getAllByRole("combobox");
    expect(dropdowns).toHaveLength(4); // Ensure 4 dropdowns are present
    expect(screen.getByText("Product type")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("Brand")).toBeInTheDocument();
    expect(screen.getByText("Date added")).toBeInTheDocument();

    // Check if the "View collection" button is rendered
    const button = screen.getByRole("button", { name: /View collection/i });
    expect(button).toBeInTheDocument();

    // Check if the child components are rendered
    expect(screen.getByTestId("ceramics")).toBeInTheDocument();
    expect(screen.getByTestId("category")).toBeInTheDocument();
    expect(screen.getByTestId("popular")).toBeInTheDocument();
  });
});
