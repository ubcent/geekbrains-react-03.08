import './Header.css';

import React, {Component} from 'react';
import { Button } from 'reactstrap';
import LoginModal from "../LoginModal";

export default class Header extends Component {

    render() {
        const {items} = this.props;
        return (
            <div className="header-container">
                <Button className="open-login-modal" onClick={this.toggleLogin} color="primary">Log in</Button>
                <nav className="dropdownmenu">
                    <ul className="list-items">
                        {items.map((item) =>{
                            return <li><a href={item.href}>{item.title}</a></li>
                        })}
                    </ul>
                </nav>
                <LoginModal/>
            </div>
        )
    }
    toggleLogin() {
        document.querySelector('.login-card').style.display = 'block';
    }

}

