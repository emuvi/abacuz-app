import React, { useDebugValue } from "react";
import { BaseState, BaseStart, BaseContext } from "./Base";
import Login from "./Login";
import Desk from "./Desk";
import "./App.css";

class App extends React.Component<{}, BaseState> {
  state = BaseStart;

  is_logged = () => this.state.token === "";

  log_in = (access: string) => {
    this.setState((_) => ({
      token: access,
    }));
  };

  log_out = () => {
    this.setState((_) => ({
      token: "",
    }));
  };

  base = {
    is_logged: this.is_logged,
    log_in: this.log_in,
    log_out: this.log_out,
  };

  render() {
    return (
      <div className="App">
        <div className="AppHead">Abacuz</div>
        <div className="AppBody">
          <BaseContext.Provider value={this.state}>
            <BaseContext.Consumer>
              {(value) =>
                this.is_logged() ? (
                  <Login base={this.base} />
                ) : (
                  <Desk base={this.base} />
                )
              }
            </BaseContext.Consumer>
          </BaseContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
