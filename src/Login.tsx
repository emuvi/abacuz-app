import React from "react";
import { BaseProps, BaseContext } from "./Base";
import axios from "axios";
import "./Login.css";

type State = {
  user: string;
  pass: string;
  error: string;
};

class Login extends React.Component<BaseProps, State> {
  state: State = {
    user: "",
    pass: "",
    error: "",
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
        this.props.base.log_in("flgj")
      })
      .catch((err) => {
        this.setState((_) => ({ error: err.response.data }));
      });
  };

  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        <span>Token:</span>
        <BaseContext.Consumer>{
          value => <span>{value.token}</span>
        }
        </BaseContext.Consumer>
        <span>User:</span>
        <input type="text" value={this.state.user} onChange={this.changeUser} />
        <span>Pass:</span>
        <input
          type="password"
          value={this.state.pass}
          onChange={this.changePass}
        />
        <button onClick={this.enter}>Enter</button>
        {!!this.state.error ? <div>{this.state.error}</div> : <></>}
      </div>
    );
  }
}

export default Login;
