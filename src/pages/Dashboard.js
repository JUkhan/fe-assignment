import React from "react";
import { Row, Col } from "antd";
import PerformanceBlock from "../components/PerformanceBlock";
import AttendanceBlock from "../components/AttendanceBlock";
import AssignmentBlock from "../components/AssignmentBlock";
const Dashboard = () => {
  return (
    <>
      <Row>
        <Col span={4}>
          <div className="nav-name">Dashboard</div>
        </Col>
        <Col span={20}>
          <div className="update-section"></div>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <AttendanceBlock />
          <PerformanceBlock />
        </Col>
        <Col span={16}>
          <div>schedule</div>
        </Col>
      </Row>
      <Row>
        <Col span={16}>
          <AssignmentBlock />
        </Col>
        <Col span={8}>Uploader</Col>
      </Row>
    </>
  );
};

export default Dashboard;
