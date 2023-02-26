import React, { Component } from "react";

export class FormWithRef extends Component {
  constructor() {
    super();
    this.state = {
      card: "",
      email: "",
      condition: false,
    };
    this.firstNameRef = React.createRef();
    this.emailRef = React.createRef();
  }

  handleChange = (event) => {
    // setState - может принимать функцию, а когда он принимает ф, то вторым параметром принимает некий callBack
    // "Почему я делаю вот такой вариант callBecka, чтобы убедиться, что карточка обновилась и только после этого я хочу использовать проверку на символы, а не до этого"
    this.setState(
      () => ({ [event.target.name]: event.target.value }),
      () => {
        if (this.state.card.length === 16) {
          this.emailRef.current.focus();
        }
      }
    );
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

  componentDidMount() {
    console.log(this.firstNameRef);
    this.firstNameRef.current.focus();
  }

  render() {
    const { email, firstName, condition } = this.state;
    return (
      <form>
        <input
          type="text"
          name="card"
          placeholder="card"
          value={this.card}
          onChange={this.handleChange}
          ref={this.firstNameRef}
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email"
          name="email"
          ref={this.emailRef}
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

export default FormWithRef;
