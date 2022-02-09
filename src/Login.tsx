import React from "react";
import { BaseProps, BaseContext } from "./Base";
import axios from "axios";

type State = {
  user: string;
  pass: string;
};

class Login extends React.Component<BaseProps, State> {
  state: State = {
    user: "",
    pass: "",
  };

  changeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((_) => ({ user: event.target.value }));
  };

  changePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((_) => ({ pass: event.target.value }));
  };

  enter = () => {
    const name = this.state.user;
    const pass = this.state.pass;
    axios
      .post("/enter", { name, pass })
      .then((res) => {
        this.props.base.logIn(res.data.lang, res.data.token);
      })
      .catch((err) => {
        this.props.base.showError(err.response.data);
      });
  };

  render() {
    return (
        <div className="Frame">
          <h1 className="Item">Login</h1>
          <span className="Item">User:</span>
          <input className="Item"
            type="text"
            value={this.state.user}
            onChange={this.changeUser}
          />
          <span className="Item">Pass:</span>
          <input className="Item"
            type="password"
            value={this.state.pass}
            onChange={this.changePass}
          />
          <button  className="Item" onClick={this.enter}>Enter</button>
        </div>
    );
  }
}

export default Login;
