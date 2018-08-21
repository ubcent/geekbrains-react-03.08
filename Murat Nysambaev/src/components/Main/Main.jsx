import './Main.css';

import React, {Component, Fragment} from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Post from "../Post";

export default class Main extends Component {

    menuItems = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'About',
            href: '/about'
        },
        {
            title: 'Articles',
            href: '/articles',
        },
        {
            title: 'News',
            href: '/news'
        },
        {
            title: 'Contact Us',
            href: '/contact'
        }
    ];
    render() {

        return (
            <Fragment>
                <Header items={this.menuItems}/>
                <Sidebar/>
                <Post/>
            </Fragment>
        )
    }

}