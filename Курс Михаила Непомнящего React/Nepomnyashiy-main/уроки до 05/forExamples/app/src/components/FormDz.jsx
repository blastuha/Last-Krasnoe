import React, { Component } from "react";

export class FormDz extends Component {
  state = {
    email: "",
    condition: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckboxChange = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  handleSubmit = () => {
    const isValidEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.state.email.toLowerCase()
      );
    const isValidCheckbox = this.state.condition;

    if (!isValidEmail) {
      alert("Your email is not valid");
      return;
    }

    if (!isValidCheckbox) {
      alert("You need to agree!");
      return;
    }

    alert("Отправлено");
    this.setState({ email: "", condition: false });
  };

  render() {
    const { email, condition } = this.state;
    return (
      <form>
        <input
          type="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email"
          name="email"
        />
        <br />
        <div>
          <input
            type="checkbox"
            value={condition}
            onChange={this.handleCheckboxChange}
            name="condition"
          />
          I agree with terms and condition
        </div>
        <button onClick={this.handleSubmit}>Send</button>
      </form>
    );
  }
}

export default FormDz;
