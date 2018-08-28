import './CommentsForm.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CommentsForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props); // вызываем родительский конструтор

        this.state = {
            author: '',
            message: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log('cdsdcs')
    }

    handleSubmit = (event) => {
        const { onSubmit } = this.props;

        if (typeof onSubmit === 'function') {
            onSubmit(this.state);
        }
        event.preventDefault(); // просто отменяем дефолтное действие по умолчанию
    }
    
    render() {
        return (
          <div className="CommentsForm">
              <label>
                  Author:
                  <input onChange={this.handleChange} type="text" name="author"/>
              </label><br/>

              <label>
                  Message: <br />
                  <textarea onChange={this.handleChange} name="message"></textarea>
                  <button onClick={this.handleSubmit}>Send</button>
              </label><br />
          </div>
        );
    }
}
  