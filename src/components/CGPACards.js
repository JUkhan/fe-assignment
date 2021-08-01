import React from "react";
import { Card, Space } from "antd";

const CGPACards = ({ cgpa }) => {
  if (cgpa === null) return <div>loading...</div>;
  const data = Object.keys(cgpa).map((key) => ({
    course: key
      .replace("_", " ")
      .replace(/[a-z]+/g, (match) => match[0].toUpperCase() + match.substr(1)),
    cgpa: cgpa[key],
  }));

  return (
    <div style={{ width: "98%", display: "inline-block", overflow: "auto" }}>
      <Space>
        {data.map((item) => (
          <Card
            style={{ width: 120, overflow: "hidden", textAlign: "center" }}
            key={item.course}
            data-testid="cgpa-cards"
          >
            <div>{item.cgpa}</div>
            <div>{item.course}</div>
          </Card>
        ))}
      </Space>
    </div>
  );
};

export default CGPACards;
