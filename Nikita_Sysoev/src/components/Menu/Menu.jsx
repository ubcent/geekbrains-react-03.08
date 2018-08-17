import React, {Component} from "react";

export default class Menu extends Component {
    render() {
        return <nav className="collapse navbar-collapse">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </nav>
    }
}