import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return <nav className="collapse navbar-collapse">
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/blog">Blog</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/comments">Comments</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/users">Users</Link>
                </li>
            </ul>
        </nav>
    }
}