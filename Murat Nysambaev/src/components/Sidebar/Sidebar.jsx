import './Sidebar.css';

import React, {Component, Fragment} from 'react';


export default class Sidebar extends Component {
    state = {
        isOpen: true
    }

    render() {
        const {items} = this.props;
        return (
        <div>
                <a id="navbar-toggle"  onClick={this.toggleSidebar}><i className="fa fa-bars fa-2x"
                                               aria-hidden="true"></i>
                </a>
          <div className="sidebar">
                <ul className="sidebar-nav">
                    <li>
                        <a href="#">Home <i className="fa fa-home menu-icon fa-2x" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#">Download<i className="fa fa-download menu-icon fa-2x" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#">Edit<i className="fa fa-cog menu-icon fa-2x" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#">log out<i className="fa fa-sign-out menu-icon fa-2x" aria-hidden="true"></i>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
        )
    }
    toggleSidebar = () => {

        document.querySelector('.sidebar').classList.toggle("test");
    }
}


