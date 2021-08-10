import React from "react";
// import { Typography } from "@material-ui/core";
import { Typography } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Categories() {
  const { Title } = Typography;
  return (
    <>
      <div className="category">
        <div className="category__title">
          <Title level={5} style={{ marginBottom: 0 }}>
            Employees Information
          </Title>
        </div>
        <div className="category__content">
          <div className="category__teams">
            <div className="category__section-title">Teams</div>
            <ul className="category__ul">
              <li className="category__li">
                <NavLink
                  to="/"
                  className="category__link"
                  activeClassName="active"
                  exact={true}
                >
                  <div className="title">All Employees</div>
                  <span className="amount">28</span>
                </NavLink>
              </li>
              <li className="category__li">
                <NavLink
                  to="/developers"
                  className="category__link"
                  activeClassName="active"
                >
                  <div className="title">Developers</div>
                  <span className="amount">8</span>
                </NavLink>
              </li>
              <li className="category__li">
                <NavLink
                  to="/sales"
                  className="category__link"
                  activeClassName="active"
                >
                  <div className="title">Sales and Marketing</div>
                  <span className="amount">5</span>
                </NavLink>
              </li>
              <li className="category__li">
                <NavLink
                  to="/business"
                  className="category__link"
                  activeClassName="active"
                >
                  <div className="title">Business Development</div>
                  <span className="amount">3</span>
                </NavLink>
              </li>
              <li className="category__li">
                <NavLink
                  to="/customer"
                  className="category__link"
                  activeClassName="active"
                >
                  <div className="title">Customer Supprt</div>
                  <span className="amount">6</span>
                </NavLink>
              </li>
              <li className="category__li">
                <NavLink
                  to="/super"
                  className="category__link"
                  activeClassName="active"
                >
                  <div className="title">Super Admin</div>
                  <span className="amount">1</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="category__permissions">
            <div className="category__section-title">Permissions</div>
            <ul className="category__ul">
              <li className="category__li">
                <NavLink
                  to="/add-user"
                  className="category__link"
                  activeClassName="active"
                >
                  <div className="title">Add New User</div>
                  <span className="button">
                    <i className="fi fi-rr-add icon" />
                    Add
                  </span>
                </NavLink>
              </li>
              <li className="category__li">
                <NavLink
                  to="/system"
                  className="category__link"
                  activeClassName="active"
                >
                  <div className="title">System Permission</div>
                  <span className="button">
                    <i className="fi fi-rr-add icon" />
                    Add
                  </span>
                </NavLink>
              </li>
              <li className="category__li">
                <NavLink
                  to="/add-team"
                  className="category__link"
                  activeClassName="active"
                >
                  <div className="title">Add New Team</div>
                  <span className="button">
                    <i className="fi fi-rr-add icon" />
                    Add
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="category__stage">
            <div className="category__section-title">Stage</div>
            <ul className="category__ul">
              <li className="category__li">
                <NavLink
                  to="/suspend"
                  className="category__link"
                  activeClassName="active"
                >
                  <div className="title">Suspend Users</div>
                  <span className="amount">4</span>
                </NavLink>
              </li>
              <li className="category__li">
                <NavLink
                  to="/delete"
                  className="category__link"
                  activeClassName="active"
                >
                  <div className="title">Delete Users</div>
                  <span className="amount">12</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
