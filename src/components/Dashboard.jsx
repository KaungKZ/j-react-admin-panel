import React from "react";
// import Grid from "@material-ui/core/Grid";
import AsideMenu from "./AsideMenu";
import Categories from "./Categories";
import AllUsers from "./AllUsers";
// import { Row, Col } from "antd";

export default function Dashboard() {
  return (
    <div className="fixed-components">
      {/* <Row> */}
      {/* <Col span={1}> */}
      <AsideMenu />
      {/* </Col> */}
      {/* <Col span={5}> */}
      <Categories />

      {/* </Col> */}
      {/* <Col span={18}> */}
      {/* </Col> */}
      {/* </Row> */}
    </div>
  );
}
