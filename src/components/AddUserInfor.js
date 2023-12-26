import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//   state = {
//     name: "Thuan",
//     address: "Thai Binh",
//     age: 21,
//   };

//   handleOnChangeName(event) {
//     this.setState({
//       name: event.target.value,
//     });
//   }

//   handleOnChangeAge(event) {
//     this.setState({
//       age: event.target.value,
//     });
//   }

//   handleOnSubmit(event) {
//     event.preventDefault();

//     this.props.handleAddNewUsers({
//       id: Math.floor(Math.random() * 100) + 1 + "random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   }

//   render() {
//     return (
//       <div>
//         My name is {this.state.name}, i'm from {this.state.address}. I'm
//         {this.state.age} year old.
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Your Name</label>
//           <input
//             value={this.state.name}
//             onChange={(event) => this.handleOnChangeName(event)}
//             type="text"
//           ></input>

//           <label>Your Age</label>
//           <input
//             value={this.state.age}
//             onChange={(event) => this.handleOnChangeAge(event)}
//             type="text"
//           ></input>

//           <button>submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("Thai Binh");
  const [age, setAge] = useState("");

  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUsers({
      id: Math.floor(Math.random() * 100) + 1 + "random",
      name: name,
      age: age,
    });
  };

  return (
    <div>
      My name is {name}, i'm from {address}. I'm
      {age} year old.
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your Name</label>
        <input
          value={name}
          onChange={(event) => handleOnChangeName(event)}
          type="text"
        ></input>

        <label>Your Age</label>
        <input
          value={age}
          onChange={(event) => handleOnChangeAge(event)}
          type="text"
        ></input>

        <button>submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
