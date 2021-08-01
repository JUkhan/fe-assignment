import React, { useState } from "react";
import CGPACards from "./CGPACards";
import { Row, Col, Button } from "antd";
import { useLoadData } from "../hooks";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
/**
 * Kindly use the mock data provided for rendering the performance block component
 * use CGPACards component to design CGPA cards
 */

const PerformanceBlock = () => {
  const marks = useLoadData("marks");
  const [cgpa, setCgpa] = useState(null);
  if (cgpa === null && marks.length) {
    setCgpa(marks[0].cgpa);
  }
  const semesterChange = (mark) => {
    setCgpa(mark.cgpa);
  };
  return (
    <div className="box">
      <Row className="">
        <Col span={8}> Performance(CGPA)</Col>
        <Col span={8} offset={8}>
          <Semester data={marks} onChange={semesterChange} />
        </Col>
      </Row>
      <CGPACards cgpa={cgpa} />
    </div>
  );
};

export default PerformanceBlock;

const Semester = ({ data, onChange }) => {
  const [index, setIndex] = useState(0);

  const prevHandler = () => {
    if (index > 0) {
      setIndex(index - 1);
      onChange(data[index - 1]);
    }
  };
  const nextHandler = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
      onChange(data[index + 1]);
    }
  };
  return (
    <div className="semester">
      <Button
        onClick={prevHandler}
        type="link"
        icon={<LeftOutlined />}
      ></Button>
      Sem {data[index]?.semester}
      <Button
        onClick={nextHandler}
        type="link"
        icon={<RightOutlined />}
      ></Button>
    </div>
  );
};
