import './Categories.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Panel} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Categories extends Component {
    static propTypes = {};
    
    static defaultProps = {};
    
    render() {
        return (
        <div className="Categories">
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