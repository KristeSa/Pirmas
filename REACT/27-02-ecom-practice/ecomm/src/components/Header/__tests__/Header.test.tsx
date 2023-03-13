import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../Header";
import renderer from "react-test-renderer";

describe("Header", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(tree).toMatchSnapshot();
  });

  it.each(["home link", "cart link"])("should render %s", (link) => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(link)).toBeVisible();
  });
});
