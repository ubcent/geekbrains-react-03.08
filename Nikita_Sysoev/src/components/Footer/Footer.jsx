import './Footer.css';

import React, {Component} from "react";

import Wrapper from "../Wrapper";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Wrapper>
                    <p> Copyright © Nikita Sysoev 2018</p>
                </Wrapper>
            </footer>
        )
    }
}