import React, { useState, useEffect } from "react";
// import { Input } from "antd";
// import { Select } from "antd";
import MakeTable from "./MakeTable";
import Topbar from "./Topbar";
import wutcat from "../assets/wutcat.png";
import {
  Menu,
  Dropdown,
  Select,
  Card,
  Input,
  AutoComplete,
  Button,
  Typography,
  Modal,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import faker from "faker";
import moment from "moment";
import mmFlag from "../assets/mm-flag.jpg";
import enFlag from "../assets/en-flag.png";
// import { Modal, Button } from 'antd';
// import {} from "antd";
// import { Menu, Dropdown } from 'antd';

// import { render } from "@testing-library/react";
// import { Input, AutoComplete } from 'antd';

// const { Option } = Select;

// let data = [];
// for (let i = 0; i < 15; i++) {
//   data.push({
//     key: i,
//     name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//     image: wutcat,
//     position: "Developer",
//     id: "G2006",
//     teams: "Development",
//     status: i / 2 === 0 ? "online" : "offline",
//     address: `London, Park Lane no. ${i}`,
//     lastLogin: moment(new Date()).format(" h:mma DDMMM, YYYY"),
//   });
// }

export default function AllUsers() {
  const [result, setResult] = useState([]);
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState({
    show: false,
    title: "",
    content: "",
  });

  // const [resultData, setResultData] = useState([]);
  const { Title } = Typography;
  const { confirm } = Modal;
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
  // function showConfirm(title, content) {
  //   confirm({
  //     width: "35%",
  //     title: title,
  //     icon: <i className="fi fi-rr-cloud-share" style={{ fontSize: "36px" }} />,
  //     content: content,
  //   });
  // }
  useEffect(() => {
    let _arr = [];
    for (let i = 0; i < 15; i++) {
      _arr.push({
        key: i,
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        image: wutcat,
        position: "Developer",
        id: "G2006",
        teams: "Development",
        status: i % 2 === 0 ? "online" : "offline",
        address: `London, Park Lane no. ${i}`,
        lastLogin: moment(new Date()).format(" h:mma DDMMM, YYYY"),
      });
    }

    setData(_arr);
  }, []);

  // const [randomLastName] = useState(faker.name.lastName());

  const handleSearch = (value) => {
    // console.log("search");
    setResult(value ? searchResult(value) : []);
  };

  // console.log(data);

  // const data = [
  //   {
  //     title: "Junior PHP Developer",
  //     id: "G2006",
  //     status: "online",
  //   },
  //   {
  //     title: "Business Development Manager",
  //     id: "G2007",
  //     status: "offline",
  //   },
  // ];

  const searchResult = (query) => {
    return [
      {
        label: "Results",
        options: data
          .filter((d) => d.name.toLowerCase().includes(query.toLowerCase()))
          .map((d) => {
            return renderItem(d.name, d.position, d.id, d.status);
          }),
      },
    ];
  };

  // console.log(searchResult("JOHN"));

  // const category = `${query}${idx}`;

  // });

  const accountInfo = (
    <>
      <Card
        title="Default size card"
        className="card"
        bordered={false}
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </>
  );
  // const renderTitle = (title) => <span>{title}</span>;

  function handleSelect(value) {
    // if (value) {
    //   const _data = [...data];
    //   setData(_data.filter((d) => d.name === value));
    // } else {
    //   setData(data);
    // }
    // data = data.filter((d) => d.name === value);
    // console.log(data);
  }

  function renderItem(name, title, value, status) {
    return {
      value: name,
      label: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: 700,
          }}
        >
          {name} - {title}
          <div
            style={{
              fontWeight: 400,
              color: "var(--gray-text-color)",
            }}
          >
            {value} -{" "}
            <span
              style={{
                fontWeight: status.toLowerCase().includes("online") ? 700 : 400,
                color: status.toLowerCase().includes("online")
                  ? "var(--black-color)"
                  : "var(--text-gray-color)",
              }}
            >
              {status}
            </span>
          </div>
        </div>
      ),
    };
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Button
          type="link"
          className="export__dropdown-button"
          // onClick={() => showConfirm("Excel Export", "Are you sure ?")}
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

  const languageMenu = (
    <Menu>
      <Menu.Item key="0">
        <Button
          type="link"
          className="info__dropdown-button"
          style={{
            color: "var(--black-color)",
          }}
        >
          <img
            src={enFlag}
            alt=""
            width="20"
            height="16"
            style={{
              objectFit: "cover",
              marginRight: "var(--padding-regular)",
            }}
          />
          English
        </Button>
      </Menu.Item>
      <Menu.Item key="1">
        <Button
          type="link"
          className="info__dropdown-button"
          // onClick={() => showConfirm("Excel Export", "Are you sure ?")}
          // onClick={() => showModal("PDF Export", "Are you sure ?")}
          style={{
            color: "var(--black-color)",
          }}
        >
          <img
            src={mmFlag}
            alt=""
            width="20"
            height="16"
            style={{
              objectFit: "cover",
              marginRight: "var(--padding-regular)",
            }}
          />
          Myanmar
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="topbar">
        <div className="topbar__search">
          <form noValidate autoComplete="off" className="topbar__form">
            <AutoComplete
              dropdownClassName="certain-category-search-dropdown"
              dropdownMatchSelectWidth={500}
              style={{ width: 250 }}
              onSearch={handleSearch}
              onSelect={handleSelect}
              className="topbar__autocomplete"
              options={result}
            >
              <Input
                placeholder="Search"
                className="topbar__input"
                prefix={<i className="fi fi-rr-search icon" />}
                allowClear
              />
            </AutoComplete>
          </form>
        </div>
        <div className="topbar__links">
          <div className="topbar__links-wrapper">
            <div className="topbar__link">
              <Dropdown
                overlay={languageMenu}
                trigger={["click"]}
                placement="bottomRight"
              >
                <a
                  className="ant-dropdown-link language__dropdown"
                  onClick={(e) => e.preventDefault()}
                >
                  <Button
                    // shape="circle"
                    type="link"
                    icon={<i className="fi fi-rr-globe icon"></i>}
                    className="table__row-info"
                  />
                </a>
              </Dropdown>

              <span className="topbar__link-dot"></span>
            </div>
            <div className="topbar__link">
              <i className="fi fi-rr-bell icon"></i>
            </div>
          </div>

          <div className="topbar__account">
            <Dropdown overlay={accountInfo} trigger={["click"]}>
              <a
                className="ant-dropdown-link link"
                onClick={(e) => e.preventDefault()}
              >
                <img
                  src={wutcat}
                  alt=""
                  width="24"
                  height="24"
                  style={{ margin: "-10px 5px 0 0" }}
                  className="photo"
                />{" "}
                Carouline Robertson <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content__header">
          <div className="content__title">
            <Title level={5} style={{ marginBottom: 0 }}>
              Getbak Employees
            </Title>
          </div>
          <div className="content__buttons">
            {/* <div className="select-all">
             
            </div> */}
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
              {/* <i className="fi fi-rr-copy"></i> */}
            </div>
          </div>
        </div>
        <MakeTable
          data={data}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
        ></MakeTable>
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
        // cancelButtonProps= { style: { display: 'none' } }}
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
