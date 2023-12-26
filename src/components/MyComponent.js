//class component
//function component
import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

// class MyComponent extends React.Component {
//   state = {
//     name: "Thuan",
//     address: "Thai Binh",
//     age: 21,

//     listUsers: [
//       { id: 1, name: "Thui", age: "30" },
//       { id: 2, name: "mam", age: "21" },
//       { id: 3, name: "Thuan", age: "16" },
//     ],
//   };

//   handleclick(event) {
//     // console.log(">> click me to handle")
//     // console.log("My name is", this.state.name, event)

//     this.setState({
//       name: "mam",
//       age: Math.floor(Math.random() * 100) + 1,
//     });
//   }

//   handleOnMouseHover(event) {
//     console.log(">> hover show text");
//     console.log(event.pageX);
//   }

//   //hàm thêm mới người dùng
//   handleAddNewUsers = (userObj) => {
//     //cách code truyền thống (bad code)
//     // const listUsersClone = this.state.listUsers;
//     // listUsersClone.unshift(userObj);

//     // this.setState({
//     //   listUsersClone: listUsersClone,
//     // });

//     //code tối ưu
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };

//   //hàm delete user
//   handleDeleteUser = (userId) => {
//     let listUsersClone = this.state.listUsers;
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };

//   //

//   //jsx react : cho phép viêt HTML code trong file JS
//   render() {
//     return (
//       <div>
//         <AddUserInfor handleAddNewUsers={this.handleAddNewUsers} />
//         <DisplayInfor
//           listUsers={this.state.listUsers}
//           handleDeleteUser={this.handleDeleteUser}
//         />
//       </div>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Thui", age: "30" },
    { id: 2, name: "mam", age: "21" },
    { id: 3, name: "Thuan", age: "16" },
  ]);

  const handleclick = (event) => {
    setListUsers({
      name: "mam",
      age: Math.floor(Math.random() * 100) + 1,
    });
  };

  const handleOnMouseHover = (event) => {
    console.log(">> hover show text");
    console.log(event.pageX);
  };

  //hàm thêm mới người dùng
  const handleAddNewUsers = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  //hàm delete user
  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setListUsers(listUsersClone);
  };

  return (
    <div>
      <AddUserInfor handleAddNewUsers={handleAddNewUsers} />
      <DisplayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default MyComponent;
