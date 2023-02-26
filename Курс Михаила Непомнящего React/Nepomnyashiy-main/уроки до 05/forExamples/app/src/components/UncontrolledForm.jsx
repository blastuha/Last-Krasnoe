import React, { Component } from "react";

export class UncontrolledForm extends Component {
  constructor() {
    super();

    this.cardRef = React.createRef();
    this.emailRef = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.cardRef.current.value.length < 16) {
      alert("invalid card number");
      return;
    }

    // send
    this.cardRef.current.value = "";
    this.emailRef.current.value = "";
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="card" placeholder="card" ref={this.cardRef} />
        <input
          type="email"
          name="email"
          placeholder="email"
          ref={this.emailRef}
        />
        <button>Send</button>
      </form>
    );
  }
}
export default UncontrolledForm;
