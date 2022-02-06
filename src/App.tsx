import React from 'react';
import './App.css';
import Login from "./Login"
import Desk from "./Desk"

type Props = {};

type State = {
  token: string;
};

class App extends React.Component<Props, State> {

  state: State = {
    token: ""
  };

  log_in = (access: string) => {
    this.setState((state) => ({ token: access }));
  }

  log_out = () => {
    this.setState((_) => ({ token: "" }));
  }

  render() {
    const is_logged = !!this.state.token;
    return (
      <div className='App'>
        <div className='AppHead'>Abacuz</div>
        <div className='AppBody'>
          {!is_logged ? (<Login log_in={this.log_in} />) : (<Desk log_out={this.log_out} />)}
        </div>
      </div>
    );
  }
}

export default App;
