import React, { useState, useEffect } from "react";
// import { Input } from "antd";
// import { Select } from "antd";
import DefaultTable from "./make_tables/DefaultTable";
import Topbar from "./Topbar";
import { Menu, Dropdown, Button, Typography, Modal, Tooltip } from "antd";
// import { DownOutlined } from "@ant-design/icons";
import wutcat from "../assets/wutcat.png";
import faker from "faker";
import moment from "moment";

export default function SuspendUser() {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState({
    show: false,
    title: "",
    content: "",
  });

  // const [resultData, setResultData] = useState([]);
  const { Title } = Typography;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name, record) => (
        <span
          style={{
            display: "flex",
            alignContent: "center",
          }}
        >
          <img
            src={record.image}
            alt={name}
            width="20"
            height="20"
            className="table__row-image"
          />
          {name}
        </span>
      ),
    },
    {
      title: "Position",
      dataIndex: "position",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (name) => <span style={{ color: "#faad14" }}>{name}</span>,
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Last Login",
      dataIndex: "lastLogin",
    },
    {
      title: "",
      dataIndex: "info",
      render: renderContent,
    },
  ];

  function renderContent() {
    return (
      <Tooltip title="info">
        <Dropdown overlay={infoMenu} trigger={["click"]}>
          <a
            className="ant-dropdown-link export__dropdown"
            onClick={(e) => e.preventDefault()}
          >
            <Button
              // shape="circle"
              type="link"
              icon={
                <i className="fi fi-rr-menu-dots-vertical table__row-info-icon" />
              }
              className="table__row-info"
            />
          </a>
        </Dropdown>
      </Tooltip>
    );
  }

  const infoMenu = (
    <Menu>
      <Menu.Item key="0">
        <Button
          type="link"
          className="info__dropdown-button"
          style={{
            color: "var(--black-color)",
          }}
        >
          <i className="fi fi-rr-shield-exclamation select__icon"></i>
          Reduce
        </Button>
      </Menu.Item>

      <Menu.Item key="1">
        <Button
          type="link"
          className="info__dropdown-button"
          // onClick={() => showConfirm("Excel Export", "Are you sure ?")}
          // onClick={() => showModal("PDF Export", "Are you sure ?")}
          style={{
            color: "#f5222d",
          }}
        >
          <i className="fi fi-rr-trash select__icon"></i>
          Delete
        </Button>
      </Menu.Item>
    </Menu>
  );

  const showModal = (title, content) => {
    setIsModalVisible({
      show: true,
      title: title,
      content: content,
    });
  };

  const handleOk = () => {
    setIsModalVisible({
      ...isModalVisible,
      show: false,
    });
  };

  const handleCancel = () => {
    setIsModalVisible({
      ...isModalVisible,
      show: false,
    });
  };

  useEffect(() => {
    let _arr = [];
    for (let i = 0; i < 4; i++) {
      _arr.push({
        key: i,
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        image: wutcat,
        position: "Developer",
        id: "G2006",
        teams: "Development",
        status: "Suspend",
        address: `London, Park Lane no. ${i}`,
        lastLogin: moment(new Date()).format(" h:mma DDMMM, YYYY"),
      });
    }

    setData(_arr);
  }, []);

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Button
          type="link"
          className="export__dropdown-button"
          onClick={() => showModal("Excel Export", "Are you sure ?")}
          style={{
            color: "#52c41a",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
          }}
        >
          <i
            className="fi fi-rr-file-delete select__icon"
            style={{
              marginRight: "var(--padding-small)",
              fontSize: "var(--font-size-large)",
            }}
          ></i>
          Excel Export
        </Button>
      </Menu.Item>
      <Menu.Item key="1">
        <Button
          type="link"
          className="export__dropdown-button"
          // onClick={() => showConfirm("Excel Export", "Are you sure ?")}
          onClick={() => showModal("PDF Export", "Are you sure ?")}
          style={{
            color: "#f5222d",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
          }}
        >
          <i
            className="fi fi-rr-document select__icon"
            style={{
              marginRight: "var(--padding-small)",
              fontSize: "var(--font-size-large)",
            }}
          ></i>
          PDF Export
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Topbar data={data} />

      <div className="content">
        <div className="content__header">
          <div className="content__title">
            <Title level={5} style={{ marginBottom: 0 }}>
              Suspend Users
            </Title>
          </div>
          <div className="content__buttons">
            <Button
              type="link"
              className="select"
              onClick={() =>
                setSelectedRows(
                  selectedRows.length > 0 ? [] : data.map((d) => d.key)
                )
              }
            >
              <i className="fi fi-rr-copy select__icon"></i>
              Select All
            </Button>
            <div className="export">
              <Dropdown overlay={menu} trigger={["click"]}>
                <a
                  className="ant-dropdown-link export__dropdown"
                  onClick={(e) => e.preventDefault()}
                >
                  <Button className="export__button">
                    Export{" "}
                    <i
                      className="fi fi-rr-angle-small-down"
                      style={{
                        display: "flex",
                        marginLeft: "7px",
                        marginTop: "3px",
                        fontWeight: "700",
                        WebkitTextStroke: "1px var(--primary-blue-color)",
                      }}
                    />
                  </Button>
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
        <DefaultTable
          data={data}
          columns={columns}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
        ></DefaultTable>
      </div>
      <Modal
        title={
          <Title level={4}>
            <i
              className="fi fi-rr-cloud-share"
              style={{
                fontSize: "var(--font-size-extra-large)",
                marginRight: "var(--padding-regular)",
              }}
            />

            {isModalVisible.title}
          </Title>
        }
        visible={isModalVisible.show}
        okText="Export"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p
          style={{
            fontWeight: 700,
            textAlign: "center",
            fontSize: "var(--font-size-large)",
          }}
        >
          {isModalVisible.content}
        </p>
        <Button
          type="primary"
          block
          style={{ fontWeight: 700 }}
          onClick={handleOk}
        >
          Export
        </Button>
      </Modal>
    </>
  );
}
