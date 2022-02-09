import React from "react";
import { BaseProps, BaseContext } from "./Base";

type State = {};

class Desk extends React.Component<BaseProps, State> {
  state: State = {};

  render() {
    return (
      <div>
        <div>Desk</div>
        <div>
          <div>
            Token:
            <BaseContext.Consumer>
              {(value) => <span>{value.token}</span>}
            </BaseContext.Consumer>
          </div>
          <button onClick={() => this.props.base.log_out()}>Exit</button>
        </div>
      </div>
    );
  }
}

export default Desk;
