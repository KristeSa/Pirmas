import { render, screen } from "@testing-library/react";
import { Product } from "../Product";
import renderer from "react-test-renderer";

describe("Product", () => {
  it("should render product props", async () => {
    const product = {
      id: 1,
      title: "Jacket",
      price: 9.99,
      description: "very nice",
      category: "clothing",
      image: "www.example.com/img",
      rating: {
        rate: 5,
        count: 20,
      },
    };

    render(<Product product={product} />);

    const titleElement = screen.getByText(product.title);
    const priceElement = screen.getByText(`PRICE: ${product.price}`);
    const imgElement = screen.getByRole("img");

    expect(titleElement).toBeVisible();
    expect(priceElement).toBeVisible();
    expect(imgElement).toHaveAttribute("src");
    expect(imgElement).toBeVisible();
  });
});
