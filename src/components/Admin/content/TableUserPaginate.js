import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";

const TableUserPaginate = (props) => {
  const { listTableUser, pageCount } = props;

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    props.fetchListUserWithPaginate(+event.selected + 1);
    props.setCurrentPage(+event.selected + 1);
    console.log(`User requested page number ${event.selected}`);
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
      <div className="d-flex justify-content-center">
        <ReactPaginate
          nextLabel="Sau >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< Trước"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={props.currentPage - 1}
        />
      </div>
    </>
  );
};

export default TableUserPaginate;
