import React from 'react';
import "./Login.css"

type Props = {
    log_in: (access: string) => void
};

type State = {
    user: string,
    pass: string
};

class Login extends React.Component<Props, State> {

    state: State = {
        user: "",
        pass: ""
    };

    changeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState((_) => ({ user: event.target.value }))
    };

    changePass = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState((_) => ({ pass: event.target.value }))
    };

    enter = () => {
        console.log(this.state.user)
        console.log(this.state.pass)
    }

    render() {
        return (
            <div className='Login'>
                <h1>Login</h1>
                <span>User:</span>
                <input type="text" value={this.state.user} onChange={this.changeUser} />
                <span>Pass:</span>
                <input type="password" value={this.state.pass} onChange={this.changePass} />
                <button onClick={this.enter}>Enter</button>
            </div>
        );
    }
}

export default Login;