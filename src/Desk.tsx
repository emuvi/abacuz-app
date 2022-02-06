import React from 'react';

type Props = {
  log_out: () => void
};

type State = {};

class Desk extends React.Component<Props, State> {

  state: State = {};

  render() {
    return (
      <div>
        <div>Desk</div>
        <div><button onClick={() => this.props.log_out()}>Exit</button></div>
      </div>
    );
  }
}

export default Desk;