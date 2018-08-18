import './CommentsForm.scss';

import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Panel} from 'react-bootstrap';
import {Form, FormGroup, Input, Button} from 'reactstrap';

export default class CommentsForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            author: '',
            message: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = () => {
        event.preventDefault();
        const {onSubmit} = this.props;
        onSubmit(this.state);
    };

    render() {
        const {author, message} = this.state;
        return (
            <div className="CommentsForm">
                <Panel>
                    <Panel.Heading>
                        <h5 className="card-header">Leave a Comment:</h5>
                    </Panel.Heading>
                    <Panel.Body>
                        <Form>
                            <FormGroup>
                                <Input onChange={this.handleChange} value={author} type="text" name="author"
                                       placeholder="your name"/>
                                <br/>
                                <Input onChange={this.handleChange} value={message} type="textarea" name="message"
                                       placeholder="your message"/>
                            </FormGroup>
                            <Button onClick={this.onSubmit} color="primary"
                                    disabled={!(author.trim() && message.trim())}>Submit</Button>
                        </Form>
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}