import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/style.scss";
import "../node_modules/antd/dist/antd.less";

const loader = document.querySelector(".loader");

const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

setTimeout(
  () =>
    ReactDOM.render(
      <App hideLoader={hideLoader} showLoader={showLoader} />,
      document.getElementById("root")
    ),
  2000
);
