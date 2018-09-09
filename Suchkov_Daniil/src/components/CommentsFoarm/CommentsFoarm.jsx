import './CommentsFoarm.scss';
import PropTypes from 'prop-types';

import React, { Component } from 'react';
    
export default class CommentsFoarm extends Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);

        this.state = {
            author: '',
            message: '',
        }
    }

    formChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    formSubmit = (event) => {
        const { onSubmit } = this.props;

        if (typeof onSubmit === 'function'){
            onSubmit(this.state);
        }

        event.preventDefault();
    }

    render() {
        const { author } = this.state;
        return (
            <div className="CommentsFoarm">
                <label>
                    Autor:<br/>
                    <input onChange={this.formChange} value={author} type="text" name="author"></input>
                </label>
                <br/>
                <label>
                    Message:<br/>
                    <textarea onChange={this.formChange} name="message"></textarea>
                </label>
                <br/>
                <button onClick={this.formSubmit}>Send</button>
            </div>
        );
    }
}
    