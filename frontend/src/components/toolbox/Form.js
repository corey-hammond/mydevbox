import React, { Component } from "react";
import { connect } from "react-redux";
import { addToolbox } from "../../actions/toolbox";

class Form extends Component {
  state = {
    toolbox: {
      name: ""
    },
    title: "",
    toolType: "",
    content: ""
  };

  onChange = evt => {
    evt.target.name === "name"
      ? this.setState({
          toolbox: {
            name: evt.target.value
          }
        })
      : this.setState({
          [evt.target.name]: evt.target.value
        });
  };

  onSubmit = evt => {
    evt.preventDefault();
    const { toolbox, title, toolType, content } = this.state;
    const newBox = toolbox;
    const newTool = { title, toolType, content };
    console.log(newBox);
    this.props.addToolbox(newBox);
  };

  render() {
    const { toolbox, title, toolType, content } = this.state;
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
              value={toolbox.name}
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
              <option>Python</option>
              <option>Javascript</option>
              <option>React</option>
              <option>Express</option>
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

export default connect(null, { addToolbox })(Form);
