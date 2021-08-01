import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;
const SideMenu = () => {
  return (
    <Sider theme="light" breakpoint="lg" collapsedWidth="0">
      <div style={{ height: 55, textAlign: "center", paddingTop: 15 }}>
        University
      </div>
      <Menu mode="vertical" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          calender
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Teachers
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
          Cources
        </Menu.Item>
        <Menu.Item key="5" icon={<CloudOutlined />}>
          Attendence
        </Menu.Item>
        <Menu.Item key="6" icon={<AppstoreOutlined />}>
          Assignment
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
export default SideMenu;
