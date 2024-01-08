import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../../services/apiServices";
import { toast } from "react-toastify";

const ModalDeleteUser = (props) => {
  const { show, setShow, dataDeleteUser } = props;

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmitDeleteUser = async () => {
    let data = await deleteUser(dataDeleteUser.id);

    if (data && data.EC == 0) {
      toast.success(data.EM);
      handleClose();
      // await props.fetchListUser();
      await props.fetchListUserWithPaginate(props.currentPage);
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xóa !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc chắn muốn xóa User này:{" "}
          <b>
            {dataDeleteUser && dataDeleteUser.email ? dataDeleteUser.email : ""}
          </b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => handleSubmitDeleteUser()}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
