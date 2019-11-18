import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./layout/Header";
import Dashboard from "./toolbox/Dashboard";
import ToolBox from "./toolbox/ToolBox";
import BoxDetail from "./toolbox/BoxDetail";
import store from "../store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              {/* routes will go here */}
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/toolbox/" component={ToolBox} />
              <Route exact path="/toolbox/:boxID" component={BoxDetail} />
              {/* <Dashboard /> */}
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
