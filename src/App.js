import React, { useEffect } from "react";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
