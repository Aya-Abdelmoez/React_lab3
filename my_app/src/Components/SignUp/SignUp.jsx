import { Component } from "react";
import './style.css'

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      FirstName: '',
      LastName: '',
      password: '',
      phone: '',
      Email: ''
    };
  }

  handleFirstName = (event) => {
    this.setState({ FirstName: event.target.value });
  };

  handleLastName = (event) => {
    this.setState({ LastName: event.target.value });
  };

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handlePhone = (event) => {
    this.setState({ phone: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ Email: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted", this.state);
  };

  render() {
    const { FirstName, LastName, password, phone, Email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>FirstName</label>
          <input type="text" value={FirstName} onChange={this.handleFirstName} />
        </div>
        <div>
          <label>LastName</label>
          <input type="text" value={LastName} onChange={this.handleLastName} />
        </div>
        <div>
          <label>password</label>
          <input type="password" value={password} onChange={this.handlePassword} />
        </div>
        <div>
          <label>Phone</label>
          <input type="number" value={phone} onChange={this.handlePhone} />
        </div>
        <div>
          <label>Email</label>
          <input type="mail" value={Email} onChange={this.handleEmail} />
        </div>
        <button type="submit">Sign up</button>
      </form>
    );
  }
}

export default Signup;