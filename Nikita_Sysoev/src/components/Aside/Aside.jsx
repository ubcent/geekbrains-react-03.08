import './Aside.scss';

import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Panel} from 'react-bootstrap';
import {Button, Form, FormGroup, Input} from 'reactstrap';
import Login from "../Login";

export default class Aside extends Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
            <div className="Aside">
                <Panel>
                    <Panel.Heading>Login</Panel.Heading>
                    <Panel.Body>
                        <div className="card-body">
                            <Login/>
                        </div>
                    </Panel.Body>
                </Panel>
                <Panel>
                    <Panel.Heading>
                        <h5 className="card-header">Search</h5>
                    </Panel.Heading>
                    <Panel.Body>
                        <Form inline>
                            <FormGroup>
                                <Input type="text" name="password" placeholder="Search for..."/>
                            </FormGroup>
                            <Button color="secondary">Go!</Button>
                        </Form>
                    </Panel.Body>
                </Panel>
                <Panel>
                    <Panel.Heading>Categories</Panel.Heading>
                    <Panel.Body>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#">Web Design</a>
                                        </li>
                                        <li>
                                            <a href="#">HTML</a>
                                        </li>
                                        <li>
                                            <a href="#">Freebies</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#">JavaScript</a>
                                        </li>
                                        <li>
                                            <a href="#">CSS</a>
                                        </li>
                                        <li>
                                            <a href="#">Tutorials</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}