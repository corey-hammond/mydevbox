import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

class Alerts extends Component {
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name)
        alert.error(`Tool Box Name: ${error.msg.name.join()}`);
      if (error.msg.title) alert.error(`Tool Title: ${error.msg.name.join()}`);
      if (error.msg.tool_type)
        alert.error(`Tool Type: ${error.msg.name.join()}`);
      if (error.msg.content)
        alert.error(`Tool Content: ${error.msg.name.join()}`);
      if (error.msg.message)
        alert.error(`Message: ${error.msg.message.join()}`);
    }

    if (message !== prevProps.message) {
      if (message.deleteBox) alert.success(message.deleteBox);
      if (message.addBox) alert.success(message.addBox);
      if (message.deleteTool) alert.success(message.deleteTool);
      if (message.addTool) alert.success(message.addTool);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
