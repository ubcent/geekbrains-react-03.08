import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component {
  static propTypes = {
      author: PropTypes.string.isRequired,
      message:PropTypes.string.isRequired,
  };

  render() {
    const {author, message} = this.props;
  return(
    <Fragment>
      <h5 className="mt-0">{author}</h5>
      <div>{message}</div>
      <a href="/comments">links on post</a>
    </Fragment>
    );
  }
}