import { render, screen, fireEvent, act } from "@testing-library/react";
import Cart from "../src/app/cart/page"; // Adjust the import path according to your project
import { useShoppingCart } from "use-shopping-cart";

jest.mock("use-shopping-cart"); // Mocking the hook

describe("Cart Component Tests", () => {
  test("renders cart items correctly", () => {
    const mockCartDetails = {
      product1: {
        id: "product1",
        name: "Product 1",
        description: "Description for product 1",
        price: 25.99,
        quantity: 2,
        image: "/product1.png",
      },
      product2: {
        id: "product2",
        name: "Product 2",
        description: "Description for product 2",
        price: 15.5,
        quantity: 1,
        image: "/product2.png",
      },
    };

    (useShoppingCart as jest.Mock).mockReturnValue({
      cartDetails: mockCartDetails,
      cartCount: 3,
      totalPrice: 67.48,
      redirectToCheckout: jest.fn(),
      removeItem: jest.fn(),
      incrementItem: jest.fn(),
      decrementItem: jest.fn(),
    });

    render(<Cart />);

    // Check if cart items are displayed correctly
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("£51.98")).toBeInTheDocument(); // Total for Product 1
    expect(screen.getByText("£15.50")).toBeInTheDocument(); // Total for Product 2

    // Use a custom function matcher for Subtotal
    expect(
      screen.getByText((content, element) => {
        const hasText = (text: string) => content.includes(text);
        const isSubtotal = hasText("Subtotal") && hasText("£67.48");
        return isSubtotal && element?.tagName === "DIV";
      })
    ).toBeInTheDocument();
  });

  test("displays error message if checkout fails", async () => {
    const mockCheckout = jest.fn().mockRejectedValueOnce({
      error: "Checkout error occurred",
    });

    (useShoppingCart as jest.Mock).mockReturnValue({
      cartDetails: {},
      cartCount: 0,
      totalPrice: 0,
      redirectToCheckout: mockCheckout,
      removeItem: jest.fn(),
      incrementItem: jest.fn(),
      decrementItem: jest.fn(),
    });

    // Mock `console.error` to verify error logging
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    render(<Cart />);

    // Simulate a checkout button click (adjusting for "Go to checkout")
    await act(async () => {
      fireEvent.click(screen.getByText("Go to checkout"));
    });

    // Assert that the error message was logged
    expect(consoleErrorSpy).toHaveBeenCalledWith("Error redirecting to checkout:", {
      error: "Checkout error occurred",
    });

    // Cleanup mock
    consoleErrorSpy.mockRestore();
  });
});
