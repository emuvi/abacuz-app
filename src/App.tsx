import React, { useDebugValue } from "react";
import { BaseState, BaseStart, BaseContext } from "./Base";
import Login from "./Login";
import Desk from "./Desk";
import "./App.css";

class App extends React.Component<{}, BaseState> {
  state = BaseStart;

  isLogged = () => this.state.token === "";

  logIn = (lang: string, token: string) => {
    this.setState((_) => ({
      lang,
      token,
    }));
  };

  logOut = () => {
    this.setState((_) => ({
      lang: "",
      token: "",
    }));
  };

  showInfo = (message: string) => {
    this.setState((_) => ({
      showInfo: message,
    }));
  };

  showError = (message: string) => {
    this.setState((_) => ({
      showError: message,
    }));
  };

  base = {
    isLogged: this.isLogged,
    logIn: this.logIn,
    logOut: this.logOut,
    showInfo: this.showInfo,
    showError: this.showError,
  };

  closeInfo = () => {
    this.setState((_) => ({showInfo: ""}))
  }

  closeError = () => {
    this.setState((_) => ({showError: ""}))
  }

  render() {
    return (
      <BaseContext.Provider value={this.state}>
        <BaseContext.Consumer>
          {(value) => (
            <div className="App">
              <div className="AppHead">Abacuz</div>
              <div className="AppBody">
                {this.isLogged() ? (
                  <Login base={this.base} />
                ) : (
                  <Desk base={this.base} />
                )}
              </div>
              {this.state.showInfo !== "" ? (
                <div className="AppShow AppShowInfo">
                  <span>{this.state.showInfo}&nbsp;&nbsp;&nbsp;</span>
                  <button onClick={this.closeInfo}>x</button>
                </div>
              ) : (
                <></>
              )}
              {this.state.showError !== "" ? (
                <div className="AppShow AppShowError">
                  <span>{this.state.showError}&nbsp;&nbsp;&nbsp;</span>
                  <button onClick={this.closeError}>x</button>
                </div>
              ) : (
                <></>
              )}
            </div>
          )}
        </BaseContext.Consumer>
      </BaseContext.Provider>
    );
  }
}

export default App;
