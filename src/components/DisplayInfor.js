import React, { useState } from "react";
import "./DisplayInfor.scss";

// class DisplayInfor extends React.Component {
//   state = {
//     isShowListUser: true,
//   };

//   hanldeHideShow = () => {
//     this.setState({
//       isShowListUser: !this.state.isShowListUser,
//     });
//   };

//   render() {
//     const { listUsers } = this.props;
//     return (
//       <div className="DisplayInforContain">
//         <div
//           onClick={(event) => {
//             this.hanldeHideShow(event);
//           }}
//         >
//           {this.state.isShowListUser === true
//             ? "Hide list user"
//             : "Show list user"}
//         </div>

//         {this.state.isShowListUser === true && (
//           <div>
//             {listUsers.map((user) => {
//               console.log(user);
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   My name is {user.name}
//                   <br />
//                   I'm {user.age} year old.
//                   <button onClick={() => this.props.handleDeleteUser(user.id)}>
//                     Delete
//                   </button>
//                   <hr />
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props;
  const [isShowListUser, setIsShowListUser] = useState(true);

  const hanldeHideShow = () => {
    setIsShowListUser(!isShowListUser);
  };

  return (
    <div className="DisplayInforContain">
      <div
        onClick={() => {
          hanldeHideShow();
        }}
      >
        {isShowListUser === true ? "Hide list user" : "Show list user"}
      </div>

      {isShowListUser === true && (
        <div>
          {listUsers.map((user) => {
            console.log(user);
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                My name is {user.name}
                <br />
                I'm {user.age} year old.
                <button onClick={() => props.handleDeleteUser(user.id)}>
                  Delete
                </button>
                <hr />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DisplayInfor;
