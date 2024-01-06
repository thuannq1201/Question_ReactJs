import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container className="fluid-Container d-flex justify-content-between pt-3 pb-3">
        {/* <Navbar.Brand href="#">Blog Của Mắm</Navbar.Brand> */}
        <NavLink className="navbar-brand col-3" to={"/"}>
          Blog Của Mắm
        </NavLink>
        <Navbar.Collapse id="navbarScroll col-6">
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to={"/"}>
              Home
            </NavLink>
            <NavLink className="nav-link" to="user">
              User
            </NavLink>
            <NavLink className="nav-link" to="admin">
              Admin
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Nav className="my-2 my-lg-0 col-3 justify-content-end">
          <NavLink className="nav-link me-3" to="login">
            Login
          </NavLink>
          <NavLink className="btn btn-dark" to="signup">
            Sign up
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
