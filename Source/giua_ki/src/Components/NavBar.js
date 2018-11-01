import React from 'react';

import { Navbar, NavItem, Nav, } from 'react-bootstrap';
import { connect } from 'react-redux';
import { firebaseLogout } from '../Actions';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.logoutClick = this.logoutClick.bind(this);
    }

    logoutClick() {
        this.props.logout();
    }

    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Collapse>
                    <Navbar.Text style={{color: 'white', fontSize: 20}}>
                        Message App FireBase
                    </Navbar.Text>
                    <Nav pullRight>
                        <NavItem pullRight onClick = {this.logoutClick}>Logout</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(firebaseLogout())
});
export default connect(null,mapDispatchToProps)(NavBar);
