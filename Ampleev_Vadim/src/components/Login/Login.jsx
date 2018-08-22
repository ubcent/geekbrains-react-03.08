import React, { Component } from 'react';

export default class Login extends Component {
    render(){
        const { loginItem } = this.props;
        return (
            <a href={loginItem.href} className="btn btn-primary">{loginItem.label}</a>
        );
    }
}