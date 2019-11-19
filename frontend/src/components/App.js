import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect, Link } from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from "react-redux";

import Header from "./layout/Header";
import Dashboard from "./toolbox/Dashboard";
import Alerts from "./layout/Alerts";
import ToolBox from "./toolbox/ToolBox";
import BoxDetail from "./toolbox/BoxDetail";
import ToolDetail from "./toolbox/ToolDetail";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";
import store from "../store";
import { loadUser } from "../actions/auth";

// Alert Options:
const alertOptions = {
  timeout: 5000,
  position: "top center"
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  {/* routes will go here */}
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <Route exact path="/register/" component={Register} />
                  <Route exact path="/login/" component={Login} />
                  <PrivateRoute exact path="/toolbox/" component={ToolBox} />
                  <PrivateRoute
                    exact
                    path="/toolbox/:boxID"
                    component={BoxDetail}
                  />
                  <PrivateRoute
                    exact
                    path="/tools/:toolID"
                    component={ToolDetail}
                  />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
