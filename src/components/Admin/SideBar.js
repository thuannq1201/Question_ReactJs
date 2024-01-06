import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaGithub,
  FaRegLaughWink,
} from "react-icons/fa";
import sidebarBg from "../../assets/images/bg2.jpg";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  const { collapsed, toggled, handleToggleSidebar } = props;
  return (
    <ProSidebar
      image={sidebarBg}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <FaReact size={"3em"} color={"blue"} />
          BlogCuaMam
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">new</span>}
          >
            <Link to={"/admin"}>Trang chủ</Link>
          </MenuItem>
          <MenuItem icon={<FaGem />}> components</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title="Quản lý tác vụ"
            icon={<FaRegLaughWink />}
          >
            <MenuItem>
              <Link to={"manage-user"}>Quản lý user</Link>
            </MenuItem>
            <MenuItem>
              Q<Link to={"manage-user"}>Quản lý bài Quiz</Link>
            </MenuItem>
            <MenuItem>
              <Link to={"manage-user"}>Quản lý câu hỏi</Link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <a
            href="https://blogcuamam.com"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <div>BlogCuaMam</div>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SideBar;
