//class component
//function component
import React from "react";

class MyComponent extends React.Component{

    state = {
        name: "Thuan",
        address: "Thai Binh",
        age: 21
    }

    //jsx react : cho phép viêt HTML code trong file JS
    render(){
        return (
            <div>
                MyComponent React <br></br>
                My name is {this.state.name}, i'm from {this.state.address}. I'm {this.state.age} year old.
            </div>
        )
    }
}

export default MyComponent;