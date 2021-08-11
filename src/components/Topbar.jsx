import React, { useState } from "react";
import wutcat from "../assets/wutcat.png";
import { Menu, Dropdown, Card, Input, AutoComplete, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import mmFlag from "../assets/mm-flag.jpg";
import enFlag from "../assets/en-flag.png";

export default function Topbar({ data }) {
  const [result, setResult] = useState([]);

  const handleSearch = (value) => {
    setResult(value ? searchResult(value) : []);
  };

  function handleSelect() {}

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
              />
              Carouline Robertson <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
