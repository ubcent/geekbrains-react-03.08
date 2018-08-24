import './Header.css';

import React, {Component} from "react";

import Menu from "../Menu";
import Wrapper from "../Wrapper";

export default class Header extends Component {
    render() {
        return (
            <header className="navbar-expand-lg navbar-dark bg-dark fixed-top">
                <Wrapper>
                    <div className="flex">
                        <Menu/>
                    </div>
                </Wrapper>
            </header>
        )
    }
}
