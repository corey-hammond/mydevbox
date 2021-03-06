import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getToolbox, deleteToolbox } from "../../actions/toolbox";

class ToolBox extends Component {
  state = {
    isLoaded: false
  };
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     isLoaded: false,
  //     toolbox: []
  //   };
  // }

  // static propTypes = {
  //   toolbox: PropTypes.array.isRequired
  // };

  componentDidMount() {
    this.props.getToolbox();
    this.setState({ isLoaded: true });
    // axios.get("/api/toolbox/").then(res =>
    //   this.setState({
    //     isLoaded: true,
    //     toolbox: res.data
    //   })
    // );
  }

  render() {
    const { isLoaded } = this.state;
    const { toolbox } = this.props;

    if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <Fragment>
          <h2>My Tool Boxes</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {toolbox.map((tool, idx) => {
                return (
                  <tr key={tool.id}>
                    <td>
                      <Link to={`/toolbox/${tool.id}`}>{tool.name}</Link>
                    </td>
                    <td>
                      <button
                        onClick={this.props.deleteToolbox.bind(this, tool.id)}
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
        </Fragment>
      );
    }
    // return (
    //
    // );
    // const toolsArray = Object.keys(this.props.toolbox).map(i => this.props.toolbox[i])
    // if ( this.props.isLoaded) return <p>Loading...</p>;
    // return <p>{toolsArray[0]}</p>;
  }
}

const mapStateToProps = state => ({
  toolbox: state.toolbox.toolbox
});

// export default ToolBox;
export default connect(mapStateToProps, { getToolbox, deleteToolbox })(ToolBox);
