import Button from "react-bootstrap/Button";
import ModalCreateUser from "./ModalCreateUser";
import { useEffect, useState } from "react";
import TableUser from "./TableUser";
import { Breadcrumb } from "react-bootstrap";
import {
  getAllUsers,
  getUserWithPaginate,
} from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalShowInfoUser from "./ModalShowInfoUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = () => {
  const LimitUser = 6;
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalInfoUser, setShowModalInfoUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

  const [listTableUser, setListTableUser] = useState([]);
  const [dataUpdateUser, setDataUpdateUser] = useState({});
  const [dataDeleteUser, setDataDeleteUser] = useState({});

  useEffect(() => {
    // fetchListUser();
    fetchListUserWithPaginate(1);
  }, []);

  const fetchListUser = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListTableUser(res.DT);
    }
  };

  const fetchListUserWithPaginate = async (page) => {
    let res = await getUserWithPaginate(page, LimitUser);
    if (res.EC === 0) {
      console.log("res dt: ", res.DT.users);
      setListTableUser(res.DT.users);
      setPageCount(res.DT.totalPages);
    }
  };

  const handleModalUpdateUser = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdateUser(user);
  };

  const resetUpdateUser = () => {
    setDataUpdateUser({});
  };

  const handleShowInfoUser = (user) => {
    setShowModalInfoUser(true);
    setDataUpdateUser(user);
  };

  const handleDeleteUser = (user) => {
    setShowModalDeleteUser(true);
    setDataDeleteUser(user);
  };

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
            fetchListUser={fetchListUser}
            fetchListUserWithPaginate={fetchListUserWithPaginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          {/* <TableUser
            listTableUser={listTableUser}
            handleModalUpdateUser={handleModalUpdateUser}
            handleShowInfoUser={handleShowInfoUser}
            handleDeleteUser={handleDeleteUser}
          /> */}

          <TableUserPaginate
            listTableUser={listTableUser}
            handleModalUpdateUser={handleModalUpdateUser}
            handleShowInfoUser={handleShowInfoUser}
            handleDeleteUser={handleDeleteUser}
            fetchListUserWithPaginate={fetchListUserWithPaginate}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />

          <ModalUpdateUser
            show={showModalUpdateUser}
            dataUpdateUser={dataUpdateUser}
            setShow={setShowModalUpdateUser}
            fetchListUser={fetchListUser}
            resetUpdateUser={resetUpdateUser}
            fetchListUserWithPaginate={fetchListUserWithPaginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />

          <ModalShowInfoUser
            show={showModalInfoUser}
            dataUpdateUser={dataUpdateUser}
            setShow={setShowModalInfoUser}
          />

          <ModalDeleteUser
            show={showModalDeleteUser}
            setShow={setShowModalDeleteUser}
            dataDeleteUser={dataDeleteUser}
            fetchListUser={fetchListUser}
            fetchListUserWithPaginate={fetchListUserWithPaginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
