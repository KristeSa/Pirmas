import { fireEvent, render, screen } from "@testing-library/react";
import { Cart } from "../Cart";

describe("Cart", () => {
  it("renders the cart with no items", () => {
    const cartProducts = [
      {
        id: 1,
        title: "Jacket",
        price: 19.99,
        amount: 1,
      },
      {
        id: 2,
        title: "Bracelet",
        price: 9.99,
        amount: 1,
      },
    ];
    const emptyCart = 0;

    render(<Cart cartProducts={cartProducts} />);
    expect(cartProduct.length).toEqual(emptyCart);
    expect(screen.getByLabelText("empty-cart-message")).toBeVisible();
    expect(screen.getByLabelText("empty-cart-message").textContent).toBe(
      "Your cart is empty"
    );
  });

  it("renders cart products and total price", () => {
    const cartProducts = [
      {
        id: 1,
        title: "Jacket",
        price: 19.99,
        description: "very nice",
        category: "clothing",
        image: "www.example.com/img",
        rating: {
          rate: 5,
          count: 20,
        },
        amount: 1,
      },
      {
        id: 2,
        title: "Bracelet",
        price: 10.0,
        description: "nice",
        category: "jewerly",
        image: "www.example.com/img",
        rating: {
          rate: 4,
          count: 13,
        },
        amount: 1,
      },
    ];

    render(<Cart cartProduct={cartProducts} />);

    expect(screen.getByText("Jacket")).toBeInTheDocument();
    expect(screen.getByText("Bracelet")).toBeInTheDocument();
    expect(screen.getByText("Total price: €29.99")).toBeInTheDocument();
  });

  it("removes an item from the cart", () => {
    const cartProducts = [
      {
        id: 1,
        title: "Jacket",
        price: 19.99,
        description: "very nice",
        category: "clothing",
        image: "www.example.com/img",
        rating: {
          rate: 5,
          count: 20,
        },
        amount: 1,
      },
      {
        id: 2,
        title: "Bracelet",
        price: 9.99,
        description: "nice",
        category: "jewerly",
        image: "www.example.com/img",
        rating: {
          rate: 4,
          count: 13,
        },
        amount: 1,
      },
      ,
    ];

    const removeFromCart = jest.fn();
    render(<Cart />);

    const removeButton = screen.getByLabelText("remove");
    fireEvent.click(removeButton);
    expect(removeFromCart).toHaveBeenCalledWith(cartProducts[0]);
    expect(cartProducts.length).toBe(cartProducts.length - 1);
  });

  it("displays the total price of all items in the cart", () => {
    render(<Cart />);

    expect(screen.getByRole("total price")).toBeVisible();
    expect(screen.getByText("Total price: $30")).toBeInTheDocument();
  });
});
