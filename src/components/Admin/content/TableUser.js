import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { getAllUsers } from "../../../services/apiServices";

const TableUser = (props) => {
  const [listTableUser, setListTableUser] = useState([]);

  useEffect(() => {
    fetchListUser();
  }, []);

  const fetchListUser = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListTableUser(res.DT);
    }
  };

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
              console.log(">> item: ", item, ">> index", index);
              return (
                <tr>
                  <td key={`table-user-${index}`}>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <Button className="btn-danger">Delete</Button>
                    <Button className="btn-info">Updte</Button>
                    <Button className="btn-success">View</Button>
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
