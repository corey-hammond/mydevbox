import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getTools, addTool, deleteTool } from "../../actions/tools";

class ToolDetail extends Component {
  state = {
    isLoaded: false
  };

  componentDidMount() {
    this.props.getTools();
    this.setState({ isLoaded: true });
  }

  render() {
    const { isLoaded } = this.state;
    const { tools } = this.props;

    if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      const toolID = parseInt(this.props.match.params.toolID);
      const selectedTool = tools.filter(tool => tool.id === toolID);
      console.log(selectedTool);
      console.log(toolID);

      if (selectedTool.length > 0) {
        return (
          <Fragment>
            <h1>{selectedTool[0].title}</h1>
            <h3>{selectedTool[0].tool_type}</h3>
            <p>{selectedTool[0].content}</p>
          </Fragment>
        );
      } else {
        return null;
      }
    }
  }
}

const mapStateToProps = state => ({
  tools: state.tools.tools
});

export default connect(mapStateToProps, {
  getTools,
  addTool,
  deleteTool
})(ToolDetail);
