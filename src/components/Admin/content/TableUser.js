import { Button, Table } from "react-bootstrap";

const TableUser = (props) => {
  const { listTableUser } = props;

  return (
    <>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Stt</th>
            <th>Username</th>
            <th>Email</th>
            <th>Quyền</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listTableUser &&
            listTableUser.length > 0 &&
            listTableUser.map((item, index) => {
              return (
                <tr key={`table-user-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <Button
                      onClick={() => props.handleDeleteUser(item)}
                      className="btn btn-danger"
                    >
                      Delete
                    </Button>
                    <Button
                      onClick={() => props.handleModalUpdateUser(item)}
                      className="btn btn-info mx-2 "
                    >
                      Update
                    </Button>
                    <Button
                      onClick={() => props.handleShowInfoUser(item)}
                      className="btn btn-success"
                    >
                      View
                    </Button>
                  </td>
                </tr>
              );
            })}

          {listTableUser && listTableUser.length === 0 && (
            <tr>
              <td className="text-center" colSpan={"5"}>
                Not found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TableUser;
