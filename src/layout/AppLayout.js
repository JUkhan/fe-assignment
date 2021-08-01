import React from "react";
import { Layout } from "antd";

import Dashboard from "../pages/Dashboard";
import SideMenu from "./SideMenu";
const { Content } = Layout;

const AppLayout = () => {
  return (
    <Layout>
      <SideMenu />
      <Layout className="site-layout">
        <Content style={{ overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: "0px 24px" }}
          >
            <Dashboard />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
