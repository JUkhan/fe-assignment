import React, { useState } from "react";
import { useLoadData } from "../hooks";
import { Select, Table, Tag } from "antd";
const { Option } = Select;
const AssignmentBlock = () => {
  const data = useLoadData("assignments");
  const [subject, setSubject] = useState("");
  const [assignments, setAssignments] = useState(null);
  const subjects = Array.from(new Set(data.map((it) => it.subject)));

  const changeSubject = (val) => {
    setSubject(val);
    setAssignments(data.filter((it) => val === "" || it.subject === val));
  };

  const columns = [
    {
      title: "Subject",
      dataIndex: "subject",
    },
    {
      title: "Teacher",
      dataIndex: "teachers",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (val) => <Tag color={getColor(val)}>{val}</Tag>,
    },
    {
      title: "Submission Date",
      dataIndex: "date",
      defaultSortOrder: "descend",
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },
  ];
  const dataSource = (assignments || data).map((it) => ({ ...it, key: it.id }));
  return (
    <div className="box">
      Assignments{" "}
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select subject"
        optionFilterProp="children"
        data-testid="select-subject"
        value={subject}
        onChange={changeSubject}
      >
        <Option value="">Select subject</Option>
        {subjects.map((it) => (
          <Option key={it} value={it}>
            {it}
          </Option>
        ))}
      </Select>
      {
        <Table
          style={{ marginTop: 12 }}
          dataSource={dataSource}
          columns={columns}
        ></Table>
      }
    </div>
  );
};
function getColor(val) {
  switch (val) {
    case "submitted":
      return "green";
    case "pending":
      return "red";

    default:
      return "blue";
  }
}
export default AssignmentBlock;
