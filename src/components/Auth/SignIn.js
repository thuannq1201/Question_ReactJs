/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Button, Container, Form, FormCheck, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./SignIn.scss";
import { toast } from "react-toastify";
import { postRegister } from "../../services/apiServices";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [image, setUserImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSignin = async () => {
    const isValidateEmail = validateEmail(email);
    if (!isValidateEmail) {
      toast.error("Invalid email");
      return;
    }
    if (!password) {
      toast.error("Password trống");
      return;
    }

    let data = await postRegister(email, password, username, image);
    console.log("data>>", data);

    if (data && data.EC == 0) {
      toast.success(data.EM);
      navigate("/login");
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setUserImage(event.target.files[0]);
    }
  };

  return (
    <Container className="d-flex flex-column w-50 vh-100 justify-content-center sign-in">
      <div
        style={{ cursor: "pointer" }}
        className="text-center font-weight-light d-block m-4 fs-4"
      >
        Hello, Who's This?
      </div>
      <div className="row">
        <Form.Group className="mb-3 col-md-6" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 col-md-6" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <label for="check" className="me-1">
            Show Password
          </label>
          <input
            id="check"
            type="checkbox"
            value={showPassword}
            onChange={() => setShowPassword((prev) => !prev)}
          />
        </Form.Group>
      </div>

      <div className="row">
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter user"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </div>

      <Form.Group className="mb-3 col-md-12" controlId="userImage">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="file"
          size="sm"
          onChange={(event) => handleUploadImage(event)}
        />
        <div className="img-preview">
          {previewImage ? (
            <img src={previewImage} />
          ) : (
            <span>Preview Image</span>
          )}
        </div>
      </Form.Group>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <FormCheck
          name="flexCheck"
          value=""
          id="flexCheckDefault"
          label="Remember me"
        />
        <a href="#" className=" text-decoration-none">
          Forgot password?
        </a>
      </div>

      <Button className="mb-4 primary" onClick={() => handleSignin()}>
        SignIn
      </Button>

      <div className="text-center">
        <p>
          Bạn đã có tài khoản?{" "}
          <a
            style={{ cursor: "pointer" }}
            className="text-danger text-decoration-none mx-2 font-weight-bold text-uppercase"
            onClick={() => handleLogin()}
          >
            Login
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
export default SignIn;
