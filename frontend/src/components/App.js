import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from "react-redux";

import Header from "./layout/Header";
import Dashboard from "./toolbox/Dashboard";
import Alerts from "./layout/Alerts";
import ToolBox from "./toolbox/ToolBox";
import BoxDetail from "./toolbox/BoxDetail";
import ToolDetail from "./toolbox/ToolDetail";
import store from "../store";

// Alert Options:
const alertOptions = {
  timeout: 5000,
  position: "top center"
};

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <AlertProvider template={AlertTemplate} {...alertOptions}>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                {/* routes will go here */}
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/toolbox/" component={ToolBox} />
                <Route exact path="/toolbox/:boxID" component={BoxDetail} />
                <Route exact path="/tools/:toolID" component={ToolDetail} />
                {/* <Dashboard /> */}
              </div>
            </Fragment>
          </AlertProvider>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
