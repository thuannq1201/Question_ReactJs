import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="App-container ">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container fluid-Container">
        <div className="sidebar-container"></div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
