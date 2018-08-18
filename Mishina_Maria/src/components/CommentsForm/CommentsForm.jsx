import './CommentsForm.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CommentsForm extends Component {
  static propTypes = {};

  static defaultProps = {};
  
  render() {
  return(
    <div className="CommentsForm">
        <label>
          Author:
            <input type="text" name="author"/>
        </label><br/>

        <label>
          Message:<br/>
            <textarea name="message"/>
        </label><br/>

        <button>Send</button>
    </div>
    );
  }  
}