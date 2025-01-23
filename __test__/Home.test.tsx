import { render, screen } from "@testing-library/react";
import Home from "../src/app/page"; // Adjust the path if your file structure is different

// Mock next/link to ensure it renders <a> tags for testing
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

// Mock components to avoid rendering their internal logic
jest.mock("../src/app/components/benefits", () => () => <div data-testid="benefits">Benefits Component</div>);
jest.mock("../src/app/components/brand", () => () => <div data-testid="brand">Brand Component</div>);
jest.mock("../src/app/components/ceramics", () => () => <div data-testid="ceramics">Ceramics Component</div>);
jest.mock("../src/app/components/hero", () => () => <div data-testid="hero">Hero Component</div>);
jest.mock("../src/app/components/popular", () => () => <div data-testid="popular">Popular Component</div>);

describe("Home Component", () => {
  test("renders all components correctly", () => {
    // Render the Home component
    render(<Home />);

    // Check if all mocked components are rendered
    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("ceramics")).toBeInTheDocument();
    expect(screen.getByTestId("popular")).toBeInTheDocument();
    expect(screen.getByTestId("benefits")).toBeInTheDocument();
    expect(screen.getByTestId("brand")).toBeInTheDocument();

    // Check if buttons with 'View collection' are rendered
    const buttons = screen.getAllByRole("button", { name: /View collection/i });
    expect(buttons).toHaveLength(2);

    // Ensure the buttons contain valid links
    const links = screen.getAllByRole("link", { name: /View collection/i });
    expect(links).toHaveLength(2);

    links.forEach((link) => {
      expect(link).toHaveAttribute("href", "/productlisting");
    });
  });
});
