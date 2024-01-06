import Button from "react-bootstrap/Button";
import ModalCreateUser from "./ModalCreateUser";
import { useState } from "react";
import TableUser from "./TableUser";
import { Breadcrumb } from "react-bootstrap";

const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

  return (
    <div className="manage-user-container">
      <div className="title">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active href="">
            Manage user
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="user-content">
        <div className="add-new-user">
          <Button onClick={() => setShowModalCreateUser(true)}>
            Add new User
          </Button>
        </div>
        <div className="table-user mt-3">
          <ModalCreateUser
            show={showModalCreateUser}
            setShow={setShowModalCreateUser}
          />
          <TableUser />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
