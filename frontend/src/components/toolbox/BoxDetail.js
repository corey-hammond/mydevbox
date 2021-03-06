import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getToolbox } from "../../actions/toolbox";
import { getTools, addTool, deleteTool } from "../../actions/tools";

class BoxDetail extends Component {
  state = {
    isLoaded: false
  };

  componentDidMount() {
    this.props.getToolbox();
    this.props.getTools();
    this.setState({ isLoaded: true });
  }

  render() {
    const { isLoaded } = this.state;
    const { toolbox } = this.props;
    const { tools } = this.props;

    if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      const boxID = parseInt(this.props.match.params.boxID);
      const selectedBox = toolbox.filter(box => box.id === boxID);
      //   console.log(selectedBox);
      //   console.log(boxID);
      const selectedTools = tools.filter(tool => tool.toolbox === boxID);
      //   console.log(selectedTools);

      if (selectedBox.length > 0) {
        return (
          <Fragment>
            <h1>{selectedBox[0].name}</h1>
            <h2>My {selectedBox[0].name} Tools</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Type</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {selectedTools.map((tool, idx) => {
                  return (
                    <tr key={tool.id}>
                      <td>
                        <Link to={`/tools/${tool.id}`}>{tool.title}</Link>{" "}
                      </td>
                      <td>{tool.tool_type}</td>
                      <td>
                        <button
                          onClick={this.props.deleteTool.bind(this, tool.id)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* FEATURE TO ADD -- HAVE A HIDDEN FORM APPEAR BELOW TABLE, DISAPPEAR AFTER NEW TOOL SAVED */}
            <button className="btn btn-primary">New++</button>
            <button className="btn btn-secondary">
              <Link to="/toolbox/">Back</Link>
            </button>
          </Fragment>
        );
      } else {
        return null;
      }
    }
  }
}

const mapStateToProps = state => ({
  toolbox: state.toolbox.toolbox,
  tools: state.tools.tools
});

export default connect(mapStateToProps, {
  getToolbox,
  getTools,
  addTool,
  deleteTool
})(BoxDetail);
