import './PostPreview.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';



export default class PostPreview extends Component {
  static propTypes={
    posts: PropTypes.arrayOf(
      PropTypes.shape({ title: PropTypes.string, subtitle: PropTypes.string,
        from: PropTypes.string, date: PropTypes.string,})
    )
  };

  static defaultProps = {};

  render() {
   const { posts } = this.props;
  return(
    <Fragment>
        { posts.map( (post) =>
          <div className="post-preview">
            <a href="#">
              <h2 className="post-title">
                {post.title}
              </h2>
              <h3 className="post-subtitle">
                {post.subtitle}
              </h3>
            </a>
            <p className="post-meta">Posted by
              <a href="#"> {post.from}</a>
              on {post.date}</p>
            <hr/>
          </div>

        )}
    </Fragment>
  )}
}