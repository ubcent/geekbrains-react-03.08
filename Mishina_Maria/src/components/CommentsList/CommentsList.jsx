import './CommentsList.scss';

import React, {Component,Fragment} from 'react';
import PropTypes from 'prop-types';
import Comment from 'components/Comment';

import {Media} from 'reactstrap';

export default class CommentsList extends Component {
  static propTypes = {
      comments: PropTypes.arrayOf(
          PropTypes.shape({
              id: PropTypes.number.isRequired,
              author: PropTypes.string.isRequired,
              message: PropTypes.string.isRequired,
          })
      )
  };

  static defaultProps = {
      comments: [],
  };
  
  render() {
    const {comments, onLoadMore} = this.props;
    return(
        <Fragment>
        <ul>{comments.map((comment) =>
            <Media className="mb-4" key={comment.id}>
                <img src="http://placehold.it/50x50" alt="image" className="d-flex mr-3 rounded-circle"/>
                <Media body>
                    <li className="list">
                        <Comment {...comment}/>
                    </li>
                </Media>
            </Media>)}
        </ul>
        <button onClick={onLoadMore} className="btn-more-commetns">Load More</button>
        </Fragment>
    )
  }  
}