import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/style.scss";
import "../node_modules/antd/dist/antd.less";
// import { createTheme } from "@material-ui/core/styles";
// import { ThemeProvider } from "@material-ui/styles";

const loader = document.querySelector(".loader");

const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

// const App = ({ hideLoader }) => {
//   useEffect(hideLoader, []);

//   return (
//     <div>I'm the app</div>
//   );
// }

setTimeout(
  () =>
    // the show/hide functions are passed as props
    ReactDOM.render(
      <App hideLoader={hideLoader} showLoader={showLoader} />,
      document.getElementById("root")
    ),
  2000
);
// ReactDOM.render(

//   <App
//   hideLoader={hideLoader}
//   showLoader={showLoader}
//   />,

//   document.getElementById("root")
// );
