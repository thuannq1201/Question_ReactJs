import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid-Container>
        <Navbar.Brand href="#">Blog Của Mắm</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="user">
              User
            </Link>
            <Link className="nav-link" to="admin">
              Admin
            </Link>
          </Nav>

          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}

          <Nav className="my-2 my-lg-0" style={{}} navbarScroll>
            <NavDropdown title="Setting" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Portfolio</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
