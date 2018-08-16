import React, { Component } from 'react';

import { Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }



    render() {

        const {items} = this.props;

        return (
            <div>
                <p>Categories</p>
                <Nav vertical>
                    {items.map((item) => <NavLink href={item.href}>{item.label}</NavLink>)}
                </Nav>
            </div>
        );
    }
}