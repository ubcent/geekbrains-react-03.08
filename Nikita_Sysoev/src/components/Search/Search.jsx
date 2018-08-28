import './Search.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Panel} from 'react-bootstrap';
import {Button, Form, FormGroup, Input} from 'reactstrap';

export default class Search extends Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
            <div className="Search">
                <Panel>
                    <Panel.Heading>
                        <h5 className="card-header">Search</h5>
                    </Panel.Heading>
                    <Panel.Body>
                        <Form inline>
                            <FormGroup style={{display: "flex", justifyContent: "space-between"}}>
                                <Input style={{width: "100%"}} type="text" name="password" placeholder="Search for..."/>
                                <Button disabled color="secondary">Go!</Button>
                            </FormGroup>
                        </Form>
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}