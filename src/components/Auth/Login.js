/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Button, Container, Form, FormCheck, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiServices";
import { toast } from "react-toastify";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    // validate

    // submit api
    let res = await postLogin(email, password);
    // console.log("res login", res);
    if (res && res.EC == 0) {
      toast.success(res.EM);
      navigate("/");
    }
    if (res && res.EC !== 0) {
      toast.error(res.EM);
    }
  };
  const navigate = useNavigate();
  const handleSignin = () => {
    navigate("/signin");
  };
  return (
    <Container className="d-flex flex-column w-25 vh-100 justify-content-center">
      <div
        style={{ cursor: "pointer" }}
        className="text-center font-weight-light d-block m-4 fs-4"
      >
        Hello, Who's This?
      </div>
      <Row className="mb-3">
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
      </Row>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <FormCheck
          name="flexCheck"
          value=""
          id="flexCheckDefault"
          label="Remember me"
        />
        <a href="#" className="text-decoration-none">
          Forgot password?
        </a>
      </div>

      <Button className="mb-4 primary" onClick={() => handleLogin()}>
        Login
      </Button>

      <div className="text-center">
        <p>
          Hãy đăng ký ngay nào ?{" "}
          <a
            style={{ cursor: "pointer" }}
            className="text-danger text-decoration-none mx-2 font-weight-bold text-uppercase"
            onClick={() => handleSignin()}
          >
            Register
          </a>
        </p>
      </div>

      <div
        style={{ cursor: "pointer" }}
        className="text-center d-block m-4 text-primary"
        onClick={() => navigate("/")}
      >
        👈🏽 Go To Home
      </div>
    </Container>
  );
};
export default Login;
