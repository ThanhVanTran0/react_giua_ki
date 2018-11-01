import React from 'react';

import {Button} from 'react-bootstrap';
import { firebaseLogin} from '../../Actions';
import { connect } from 'react-redux';

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
            <div>
                Sign In page
                <Button bsStyle='primary' onClick={this.btnLogInClick}>Sign in with google</Button>
            </div>
            )
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(firebaseLogin()),
}};
 
export default connect(undefined, mapDispatchToProps)(SignIn);
