import React, { Component } from 'react';
// import ReactDOM from "react-dom";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button className="btn btn-success m-5 pl-5 pr-5" onClick={() => this.props.ashwani()}> Hello</button>
        <span>{this.props.count}</span>
      </div>
    )
  }
}
export default Button;