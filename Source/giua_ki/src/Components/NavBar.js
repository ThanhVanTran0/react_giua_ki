import React from 'react';

import { Navbar, NavItem, Nav, } from 'react-bootstrap';

export default class NavBar extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Collapse>
                    <Navbar.Text style={{color: 'white', fontSize: 20}}>
                        Message App FireBase
                    </Navbar.Text>
                    <Nav pullRight>
                        <NavItem pullRight>Logout</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
