import '../Header/Header.css';

import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    login = () => {
        console.log(this.state)
    };

    render() {
        const {login, password} = this.state;
        return (
            <Panel>
                <Panel.Heading>Login</Panel.Heading>
                <Panel.Body>
                    <div className="card-body">
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Login</Label>
                                <Input onChange={this.handleChange}
                                       value={login} type="text" name="login"
                                       placeholder="email"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input onChange={this.handleChange}
                                       value={password} type="password" name="password"
                                       placeholder="password"/>
                            </FormGroup>
                            <Button color="primary"
                                    onClick={this.login}
                                    disabled={!(login.trim() && password.trim())}>
                                LOG IN
                            </Button>
                        </Form>
                    </div>
                </Panel.Body>
            </Panel>
        );
    }
}