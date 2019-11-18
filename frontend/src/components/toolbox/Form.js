import React, { Component } from "react";
import { connect } from "react-redux";
import { getToolbox, addToolbox } from "../../actions/toolbox";

class Form extends Component {
  state = {
    box: {
      name: ""
    },
    title: "",
    toolType: "",
    content: "",
    isLoaded: false
  };

  componentDidMount() {
    this.props.getToolbox();
    this.setState({ isLoaded: true });
  }

  onChange = evt => {
    evt.target.name === "name"
      ? this.setState({
          box: {
            name: evt.target.value
          }
        })
      : this.setState({
          [evt.target.name]: evt.target.value
        });
  };

  onSubmit = evt => {
    evt.preventDefault();
    const { box, title, toolType, content } = this.state;
    const newBox = box;
    const newTool = { title, toolType, content };
    console.log(newBox);
    this.props.addToolbox(newBox);
  };

  render() {
    const { isLoaded } = this.state;
    const { toolbox } = this.props;
    const { box, title, toolType, content } = this.state;
    if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="card card-body mt-4 mb-4">
          {/* ToolBox Form */}
          <h2>Add a Tool Box</h2>
          <form onSubmit={this.onSubmit}>
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
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>

          {/* Tool Form */}
          <h2>Add a New Tool</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tool Box</label>
              <select name="toolbox" className="form-control">
                {/* bring in state via props, map out select options */}
                {toolbox.map((tool, idx) => {
                  return <option key={tool.id}>{tool.name}</option>;
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
                name="toolType"
                onChange={this.onChange}
                value={toolType}
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
              <button type="submit" className="btn btn-primary">
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

export default connect(mapStateToProps, { getToolbox, addToolbox })(Form);
