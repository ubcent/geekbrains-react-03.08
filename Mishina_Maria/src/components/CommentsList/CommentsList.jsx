import './CommentsList.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from 'components/Comment';

import {Media} from 'reactstrap';

export default class CommentsList extends Component {
  static propTypes = {
      comments: PropTypes.arrayOf(
          PropTypes.shape({
              author: PropTypes.string.isRequired,
              message: PropTypes.string.isRequired,
          })
      )
  };

  static defaultProps = {
      comments: [],
  };
  
  render() {
    const {comments} = this.props;
    return(
        <ul>{comments.map((comment) =>
            <Media className="mb-4">
                <img src="http://placehold.it/50x50" alt="image" className="d-flex mr-3 rounded-circle"/>
                <Media body>
                    <li key={comment.id} className="list">
                        <Comment {...comment}/>
                    </li>
                </Media>
            </Media>)}
        </ul>
    )
  }  
}