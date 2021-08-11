import React, { useState } from "react";
// import { Table } from "antd";
import { Table } from "antd";
// import faker from "faker";
// import moment from "moment";

export default function DefaultTable({
  data,
  columns,
  selectedRows,
  setSelectedRows,
}) {
  const [selectionType] = useState("checkbox");

  const rowSelection = {
    onChange: (selectedRowKeys) => {
      setSelectedRows(selectedRowKeys);
    },
    getCheckboxProps: (record) => ({
      name: record.name,
    }),
  };

  return (
    <div className="table">
      <Table
        rowSelection={{
          type: selectionType,
          selectedRowKeys: selectedRows,
          ...rowSelection,
        }}
        rowClassName="table__row"
        columns={columns}
        dataSource={data}
        scroll={{ x: true }}
        pagination={{ style: { marginRight: "var(--padding-large)" } }}
      />
    </div>
  );
}
