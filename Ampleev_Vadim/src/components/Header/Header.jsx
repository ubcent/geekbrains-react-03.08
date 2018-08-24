import Menu from '../Menu';
import Login from '../Login';

import React, { Component, Fragment } from 'react';

export default class Header extends Component {
    render() {
        const menuItems = [
            {href: '/', label: 'Home'},
            {href: '/new', label: 'New'},
            {href: '/about', label: 'About'}
        ]

        const loginItem = {
            href: '/login',
            label: 'Login'
        }

        return (
            <Fragment>
                <Login loginItem={loginItem}/>
                <Menu items={menuItems}/>
            </Fragment>
        );
    }
}