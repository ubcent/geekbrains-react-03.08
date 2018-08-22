import './Aside.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Panel} from 'react-bootstrap';
import {Button, Form, FormGroup, Input} from 'reactstrap';
import {Link} from 'react-router';
import Login from '../Login';

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
                            <FormGroup style={{display: "flex", justifyContent: "space-between"}}>
                                <Input style={{width: "100%"}} type="text" name="password" placeholder="Search for..."/>
                                <Button color="secondary">Go!</Button>
                            </FormGroup>
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
                                            <Link to="/web">Web Design</Link>
                                        </li>
                                        <li>
                                            <Link to="/html">HTML</Link>
                                        </li>
                                        <li>
                                            <Link to="/freebies">Freebies</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <Link to="/javascript">JavaScript</Link>
                                        </li>
                                        <li>
                                            <Link to="/css">CSS</Link>
                                        </li>
                                        <li>
                                            <Link to="/tutorials">Tutorials</Link>
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