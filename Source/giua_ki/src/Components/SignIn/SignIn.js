import React from 'react';

import { Button } from 'react-bootstrap';
import { firebaseLogin } from '../../Actions';
import { connect } from 'react-redux';
import "./SignIn.css"

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.btnLogInClick = this.btnLogInClick.bind(this);
    }

    btnLogInClick() {
        this.props.login();
    }

    render() {
        return (
            <div className={"container"}>
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


const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(firebaseLogin()),
    }
};

export default connect(undefined, mapDispatchToProps)(SignIn);
