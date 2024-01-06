import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import "./ModalCreateUser.scss";
import { toast } from "react-toastify";
import { postCreateUser } from "../../../services/apiServices";

const ModalCreateUser = (props) => {
  const { show, setShow } = props;

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setUsername("");
    setPassword("");
    setRole("user");
    setPreviewImage("");
    setUserImage("");
  };
  // const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("user");
  const [image, setUserImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setUserImage(event.target.files[0]);
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleCreateUser = async () => {
    const isValidateEmail = validateEmail(email);
    if (!isValidateEmail) {
      toast.error("Invalid email");
      return;
    }
    if (!password) {
      toast.error("Password trống");
      return;
    }

    let data = await postCreateUser(email, password, role, username, image);

    if (data && data.EC == 0) {
      toast.success(data.EM);
      handleClose();
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        className="modal-create-user"
        backdrop="static"
        size="xl"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="row">
              <Form.Group className="mb-3 col-md-6" controlId="email">
                <Form.Label>Email address</Form.Label>
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
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>
            </div>

            <div className="row">
              <Form.Group className="mb-3 col-md-6" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Enter email"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3 col-md-6" controlId="role">
                <Form.Label>role</Form.Label>
                <Form.Select
                  aria-label="role"
                  onChange={(event) => setRole(event.target.value)}
                  value={role}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </Form.Select>
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
          </Form>
          <Button
            var
            iant="primary"
            type="submit"
            onClick={() => handleCreateUser()}
          >
            Submit
          </Button>
          <Button className="ms-2" variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCreateUser;
