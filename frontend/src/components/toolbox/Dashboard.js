import React, { Fragment } from "react";
import Form from "./Form";
import ToolBox from "./ToolBox";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      {/* <Route exact path='/toolbox/' component={ToolBox} /> */}
      <ToolBox />
    </Fragment>
  );
}
