import React, { useState } from "react";
import { useLoadData } from "../hooks";
import Attendance from "./Attendance";
import { Divider, Select, Space } from "antd";
const { Option } = Select;
const AttendanceBlock = () => {
  const marks = useLoadData("marks");
  const [selectedSemester, setSemester] = useState(null);
  if (selectedSemester === null && marks.length) {
    setSemester(marks[0]);
  }
  const changeSemester = (val) => {
    setSemester(marks.find((m) => m.semester === val));
  };

  return (
    <div className="box">
      <Space>
        <div style={{ textAlign: "center" }}>
          <div>Attenddence</div>
          <div>{selectedSemester?.attendance}%</div>
          <div>Semester</div>
          <Select
            data-testid="select-sem"
            value={selectedSemester?.semester}
            onChange={changeSemester}
          >
            {marks.map((mark) => (
              <Option key={mark.semester} value={mark.semester}>
                0{mark.semester}
              </Option>
            ))}
          </Select>
        </div>

        <Divider type="vertical" style={{ height: 90 }}></Divider>

        <div>
          <Attendance total={selectedSemester?.total} />
        </div>
      </Space>
    </div>
  );
};

export default AttendanceBlock;
