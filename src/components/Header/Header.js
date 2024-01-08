import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("login");
    // alert("ok");
  };
  const handleSignIn = () => {
    navigate("signin");
    // alert("ok");
  };
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
          <button
            className="btn btn-outline me-3"
            onClick={() => handleLogin()}
          >
            Login
          </button>
          <button
            className="btn btn-dark"
            to="signup"
            onClick={() => handleSignIn()}
          >
            Sign up
          </button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
