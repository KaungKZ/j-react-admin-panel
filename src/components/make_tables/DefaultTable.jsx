import React, { useState } from "react";
// import { Table } from "antd";
import { Button, Tooltip, Table, Dropdown, Menu } from "antd";
// import faker from "faker";
// import moment from "moment";

export default function DefaultTable({
  data,
  columns,
  selectedRows,
  setSelectedRows,
}) {
  const [selectionType] = useState("checkbox");

  // console.log(data);

  // const columns = [
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     render: (name, record) => (
  //       <span
  //         style={{
  //           display: "flex",
  //           alignContent: "center",
  //         }}
  //       >
  //         <img
  //           src={record.image}
  //           alt={name}
  //           width="20"
  //           height="20"
  //           className="table__row-image"
  //         />
  //         {name}
  //       </span>
  //     ),
  //   },
  //   {
  //     title: "Position",
  //     dataIndex: "position",
  //   },
  //   {
  //     title: "Teams",
  //     dataIndex: "teams",
  //   },
  //   {
  //     title: "Address",
  //     dataIndex: "address",
  //   },
  //   {
  //     title: "Last Login",
  //     dataIndex: "lastLogin",
  //   },
  //   {
  //     title: "",
  //     dataIndex: "info",
  //     render: renderContent,
  //   },
  // ];

  // console.log(data);

  // const infoMenu = (
  //   <Menu>
  //     <Menu.Item key="0">
  //       <Button
  //         type="link"
  //         className="info__dropdown-button"
  //         style={{
  //           color: "var(--black-color)",
  //         }}
  //       >
  //         <i className="fi fi-rr-info select__icon"></i>
  //         View Info
  //       </Button>
  //     </Menu.Item>
  //     <Menu.Item key="1">
  //       <Button
  //         type="link"
  //         className="info__dropdown-button"
  //         // onClick={() => showConfirm("Excel Export", "Are you sure ?")}
  //         // onClick={() => showModal("PDF Export", "Are you sure ?")}
  //         style={{
  //           color: "var(--black-color)",
  //         }}
  //       >
  //         <i className="fi fi-rr-pencil select__icon"></i>
  //         Edit Information
  //       </Button>
  //     </Menu.Item>
  //     <Menu.Item key="2">
  //       <Button
  //         type="link"
  //         className="info__dropdown-button"
  //         // onClick={() => showConfirm("Excel Export", "Are you sure ?")}
  //         // onClick={() => showModal("PDF Export", "Are you sure ?")}
  //         style={{
  //           color: "var(--black-color)",
  //         }}
  //       >
  //         <i className="fi fi-rr-shield-exclamation select__icon"></i>
  //         Suspend
  //       </Button>
  //     </Menu.Item>
  //     <Menu.Item key="3">
  //       <Button
  //         type="link"
  //         className="info__dropdown-button"
  //         // onClick={() => showConfirm("Excel Export", "Are you sure ?")}
  //         // onClick={() => showModal("PDF Export", "Are you sure ?")}
  //         style={{
  //           color: "#f5222d",
  //         }}
  //       >
  //         <i className="fi fi-rr-trash select__icon"></i>
  //         Delete
  //       </Button>
  //     </Menu.Item>
  //   </Menu>
  // );

  // function renderContent() {
  //   return (
  //     <Tooltip title="info">
  //       <Dropdown overlay={infoMenu} trigger={["click"]}>
  //         <a
  //           className="ant-dropdown-link export__dropdown"
  //           onClick={(e) => e.preventDefault()}
  //         >
  //           <Button
  //             // shape="circle"
  //             type="link"
  //             icon={
  //               <i className="fi fi-rr-menu-dots-vertical table__row-info-icon" />
  //             }
  //             className="table__row-info"
  //           />
  //         </a>
  //       </Dropdown>
  //     </Tooltip>
  //   );
  // }

  // console.log(selectedRows);

  const rowSelection = {
    onChange: (selectedRowKeys) => {
      setSelectedRows(selectedRowKeys);
    },
    getCheckboxProps: (record) => ({
      // disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  // function renderInfo() {}
  return (
    <div className="table">
      <Table
        // rowSelection={{
        //   type: selectionType,
        //   ...rowSelection,
        // }}
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
