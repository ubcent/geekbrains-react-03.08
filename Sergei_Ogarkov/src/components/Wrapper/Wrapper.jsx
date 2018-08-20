import './Wrapper.css';

import React, { Component } from 'react';
import { Container } from 'reactstrap';

export default class Wrapper extends Component {
    render (){
        const { children } = this.props;
        return (
            <Container>{ children }</Container>
        )
    }
}