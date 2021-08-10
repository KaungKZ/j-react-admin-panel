import React, { useState } from "react";
import wutcat from "../assets/wutcat.png";
import { Menu, Dropdown, Select, Card, Input, AutoComplete } from "antd";
import { DownOutlined } from "@ant-design/icons";
import faker from "faker";

export default function Topbar() {
  const [result, setResult] = useState([]);
  const [randomLastName] = useState(faker.name.lastName());

  const handleSearch = (value) => {
    setResult(value ? searchResult(value) : []);
  };

  const data = [
    {
      title: "Junior PHP Developer",
      id: "G2006",
      status: "online",
    },
    {
      title: "Business Development Manager",
      id: "G2007",
      status: "offline",
    },
  ];

  const searchResult = (query) => {
    return [
      {
        label: "Results",
        options: data.map((d, idx) =>
          renderItem(
            `${query}${idx === 1 ? ` ${randomLastName}` : ""}`,
            d.title,
            d.id,
            d.status
          )
        ),
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
  return (
    <div className="topbar">
      <div className="topbar__search">
        <form noValidate autoComplete="off" className="topbar__form">
          <AutoComplete
            dropdownClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={500}
            style={{ width: 250 }}
            onSearch={handleSearch}
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
            <i className="fi fi-rr-globe icon"></i>
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
  );
}
