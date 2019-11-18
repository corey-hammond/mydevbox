import React, { Component } from "react";
import { connect } from "react-redux";
import { getToolbox, addToolbox } from "../../actions/toolbox";
import { getTools, addTool } from "../../actions/tools";

class Form extends Component {
  state = {
    box: {
      name: ""
    },
    boxname: "",
    title: "",
    tool_type: "",
    content: "",
    isLoaded: false
  };

  componentDidMount() {
    this.props.getToolbox();
    this.setState({ isLoaded: true });
  }

  onChange = evt => {
    if (evt.target.name === "name") {
      this.setState({
        box: {
          name: evt.target.value
        }
      });
    }

    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmitTools = evt => {
    evt.preventDefault();
    const target = document.getElementById("boxname");
    const values = target.options;
    const selected = values.selectedIndex;
    const toolbox = target[selected].value;
    const { title, tool_type, content } = this.state;
    const newTool = { toolbox, title, tool_type, content };
    console.log(newTool);
    this.props.addTool(newTool);
  };

  handleSubmitToolbox = evt => {
    evt.preventDefault();
    const { box } = this.state;
    const newBox = box;
    console.log(newBox);
    this.props.addToolbox(newBox);
  };

  render() {
    const { isLoaded } = this.state;
    const { toolbox } = this.props;
    const { box, boxname, title, tool_type, content } = this.state;
    if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="card card-body mt-4 mb-4">
          {/* ToolBox Form */}
          <h2>Add a Tool Box</h2>
          <form>
            <div className="form-group">
              <label>Tool Box Name</label>
              <input
                type="text"
                className="form-control"
                name={"name"}
                onChange={this.onChange}
                value={box.name}
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary"
                onClick={this.handleSubmitToolbox}
              >
                Submit
              </button>
            </div>
          </form>

          {/* Tool Form */}
          <h2>Add a New Tool</h2>
          <form>
            <div className="form-group">
              <label>Tool Box</label>
              <select
                id="boxname"
                name="boxname"
                onChange={this.onChange}
                className="form-control"
              >
                {toolbox.map((tool, idx) => {
                  return (
                    <option key={tool.id} id={tool.id}>
                      {tool.id}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label>Tool Name</label>
              <input
                className="form-control"
                type="text"
                name="title"
                onChange={this.onChange}
                value={title}
              />
            </div>
            <div className="form-group">
              <label>Tool Type</label>
              <input
                className="form-control"
                type="text"
                name="tool_type"
                onChange={this.onChange}
                value={tool_type}
              />
            </div>
            <div className="form-group">
              <label>Content</label>
              <textarea
                className="form-control"
                name="content"
                rows="3"
                onChange={this.onChange}
                value={content}
              ></textarea>
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary"
                onClick={this.handleSubmitTools}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  toolbox: state.toolbox.toolbox
});

export default connect(mapStateToProps, { getToolbox, addToolbox, addTool })(
  Form
);
