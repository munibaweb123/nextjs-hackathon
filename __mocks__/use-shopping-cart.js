module.exports = {
    useShoppingCart: () => ({
      addItem: jest.fn(),
      removeItem: jest.fn(),
      incrementItem: jest.fn(),
      decrementItem: jest.fn(),
      totalPrice: "67.48", // Mocked total price
      redirectToCheckout: jest.fn(),
    }),
  };
  