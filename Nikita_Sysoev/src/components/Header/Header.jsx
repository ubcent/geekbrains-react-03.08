import './Header.css';

import React, {Component} from "react";

import Menu from "../Menu";
import Login from "../Login";
import Wrapper from "../Wrapper";

export default class Header extends Component {
    render() {
        return <header className='header'>
            <nav className="navbar navbar-inverse">
                <Wrapper>
                    <div className="flex">
                        <Menu/>
                        <Login/>
                    </div>
                </Wrapper>
            </nav>
        </header>
    }
}