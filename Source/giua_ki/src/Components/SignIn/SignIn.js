import React from 'react';

import "./SignIn.css"
import {withFirebase} from 'react-redux-firebase'

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.btnLogInClick = this.btnLogInClick.bind(this);
    }

    btnLogInClick() {
        this.props.firebase.login({provider: 'google', type: 'popup'}).then(res => this.props.history.push('/chat'))
    }

    render() {
        return (
            <div className={"background"}>
                <div className='centerdiv'>
                <div className={"title"}>
                    <h2>Message App</h2>
                </div>
                <div className={"button"}>
                    <button className="loginBtn loginBtn--google" onClick={this.btnLogInClick}>
                        Login with Google
                    </button>
                </div>
                </div>
            </div>
        )
    };
}

export default withFirebase(SignIn);
