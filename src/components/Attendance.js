import React from "react";
import { Space } from "antd";
const Attendance = ({ total }) => {
  if (!total) return <div>loading...</div>;
  const data = Object.keys(total).map((key) => ({
    course: key
      .replace("_", " ")
      .replace(/[a-z]+/g, (match) => match[0].toUpperCase() + match.substr(1)),
    attendence: total[key],
  }));
  return (
    <Space wrap>
      {data.map((att) => (
        <div
          key={att.course}
          style={{ textAlign: "center" }}
          data-testid="attendance-card"
        >
          <div>{att.course}</div>
          <div>{att.attendence}/100</div>
        </div>
      ))}
    </Space>
  );
};

export default Attendance;
