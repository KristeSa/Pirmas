import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Link className="navbar-brand" to={"/"}>
        Ecommerce
      </Link>
      <Link className="navbar-brand" to={"/checkout"}>
        Checkout
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
    </Navbar>
  );
};
