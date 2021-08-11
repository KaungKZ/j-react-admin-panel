import React, { useEffect } from "react";
import Dashboard from "./components/Dashboard";
import AsideMenu from "./components/AsideMenu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import Layout from "./components/utils/Layout";
import SuspendUser from "./components/SuspendUser";

function App({ hideLoader }) {
  useEffect(hideLoader, []);
  return (
    <Router>
      <Dashboard></Dashboard>
      <Switch>
        <Layout>
          <Route exact path="/">
            <AllUsers />
          </Route>
          <Route path="/suspend">
            <SuspendUser />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
